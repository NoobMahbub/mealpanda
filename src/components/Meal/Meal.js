import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Meal.css';
const Meal = (props) => {
    const {strMeal, strMealThumb,  idMeal} = props.meal;
    
    const navigate = useNavigate();
    
    const showMealDetail = (id) => {
        const path = `/meal/${id}`;
        navigate(path);
    }
    return (
   
        <div className='meal-container'>
        <img src={strMealThumb} alt='thumbnail' />
            <h3>{strMeal}</h3>
            
            <div className='meal-btn'>
            <button onClick={() => showMealDetail(idMeal)}>Details</button>
            </div>
            </div>
      
    );
};

export default Meal;