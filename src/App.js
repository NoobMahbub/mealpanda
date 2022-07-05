import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import MealDetail from './components/MealDetail/MealDetail';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/meals" element={<Meals></Meals>} />
        <Route path="/meal/:mealId" element={<MealDetail></MealDetail>}></Route>
        <Route path="/about" element={<About></About>} />
        <Route path="*" element={<p>404 Not Found</p>} />
      </Routes>
    
    </div>
  );
}

export default App;
