import { useState, useEffect } from 'react';
import axios from 'axios';
import './Food.css';
import FoodModal from './FoodModal';

function Food() {
  const [recipes, setRecipes] = useState([]);
  const [recipeType, setRecipeType] = useState('main course');

  useEffect(() => {
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_APIKEY}&query=${recipeType}&number=22`)
      .then(response => {
        setRecipes(response.data.results);
      })
      .catch(error => {
        // console.log(error);
      });
  }, [recipeType]);

  const handleRecipeTypeChange = (type) => {
    setRecipeType(type);
  }

  const [clickedItem,setClickedItem]=useState({})


  const [showFlag, setShowFlag] = useState(false);
    function modalExpose(recipe) {
        setShowFlag(true);
        setClickedItem(recipe);
    }
    const handleClose = () => {
        setShowFlag(false);
    };


  return (
    <div className="container" >
      <h1 style={{ fontFamily: "Georgia"  }} >Select the food to add it to your event </h1>
      <div style={{ fontFamily: "Georgia" }} className="btn-group my-4" role="group">
        <button type="button" className={`btn btn-secondary ${recipeType === 'main course' ? 'active' : ''}`} onClick={() => handleRecipeTypeChange('main course')}>Main Course</button>
        <button type="button" className={`btn btn-secondary ${recipeType === 'breakfast' ? 'active' : ''}`} onClick={() => handleRecipeTypeChange('breakfast')}>Breakfast</button>
        <button type="button" className={`btn btn-secondary ${recipeType === 'dessert' ? 'active' : ''}`} onClick={() => handleRecipeTypeChange('dessert')}>Dessert</button>
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-4 mt-4">
        {recipes.map(recipe => (
          <div className="col" key={recipe.id}>
            <div className="card border-secondary food-card"> {/* Add the "food-card" class */}
              <img src={recipe.image} className="card-img-top" alt={recipe.title} />
              <div className="card-body">
                <h5 style={{ fontFamily: "Georgia" }} className="card-title">{recipe.title}</h5>
                <button type="button" style={{ fontFamily: "Georgia" }} className="btn btn-primary" onClick={() => modalExpose(recipe)}>Add to your Event</button> {/* Apply the "btn-primary" class */}
             <FoodModal showFlag={showFlag} handleClose={handleClose} item={clickedItem} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Food;
