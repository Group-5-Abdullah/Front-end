
import { Link } from 'react-router-dom';
import Footer from './Footer';
import FormComp from './Form/FormComp';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Music from './music/Music';
import Flower from './flower/Flower';
import Food from './food/Food';
import Gifts from './gifts/Gifts';
import ReadyPackages from './ReadyPackages/ReadyPackages';
import YourEvent from './yourevent/YourEvent';
function Home (){
   
    return (
        <div>
     <Header/>
     <FormComp/>
     <Link to ="/music">Music</Link>
     <Link to ="/flower">Flower</Link>
     <Link to ="/food">Food</Link>
     <Link to ="/gift">Gift</Link>
     <Link to ="/readypackages">Get Your Ready Package!</Link>
     <Routes>
     
      <Route path='/music' element={<Music/>}></Route>
      <Route path='/flower' element={<Flower/>}></Route>
      <Route path='/food' element={<Food/>}></Route>
      <Route path='/gift' element={<Gifts/>}></Route>
      <Route path='/readypackages' element={<ReadyPackages/>}></Route>
      <Route path='/yourevent' element={<YourEvent/>}></Route>
     </Routes>
     <Footer/>
        </div>
    )
} export default Home;