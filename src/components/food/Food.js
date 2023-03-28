import { useState, useEffect } from 'react';
import axios from 'axios';
import './Food.css';
import FoodModal from './FoodModal';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';
import SideBarComp from '../SideBarComp';
function Food() {

  const [chooseArr, setChooseArr] = useState([]);
  const user_email = localStorage.getItem("user_email");
  const serverUrl = `${process.env.REACT_APP_serverURL}events/${user_email}`;
  const getReq = () => {
    axios.get(serverUrl).then((resp) => {
      setChooseArr(resp.data);
    });
  };
  useEffect(() => {
    getReq();
  }, [chooseArr]);
  const { isAuthenticated, loginWithRedirect,user } = useAuth0();
  if (isAuthenticated) {
    localStorage.setItem("user_email", user.email);
  }

  const [recipes, setRecipes] = useState([]);
  const [recipeType, setRecipeType] = useState('main course');

  useEffect(() => {
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_APIKEY}&query=${recipeType}&number=22`)
      .then(response => {
        setRecipes(response.data.results);
      })
      
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
      <SideBarComp/>
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
                <Button
                style={{ fontFamily: "Georgia" }}
                    className="btn btn-primary"
                    onClick={() => {
                      if (isAuthenticated&& chooseArr.length) {
                        modalExpose(recipe);
                      } else if (isAuthenticated&&!chooseArr.length) {
                        alert("Add your event first!!!")
                    } else if (!isAuthenticated) {
                        loginWithRedirect()
                      }
                    }}
                  >
                    Add to your Event
                  </Button>
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
