import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Meals.css';

const Meals = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if(data.meals.length !== null) {
                setMeals(data.meals);
                }
            });
    }, [searchText]);

    const searchFood = (e) => {
        setSearchText(e.target.value);
    }
   
        return (
            <>
                <div className='container'>
                    <h2>Find the food you want</h2>
                    <input onChange={searchFood} type="text" placeholder='Search your food...' />
                    <div className='meals-container'>
                        {
                            meals.map(meal => <Meal meal={meal} key={meal.idMeal}></Meal>)
                        }
                    </div>
                </div>

            </>
        );
    }


export default Meals;