import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import {AiOutlineArrowLeft, AiOutlineYoutube} from 'react-icons/ai';
import './MealDetail.css';
const MealDetail = () => {
    const {mealId} = useParams();
    const [meal, setMeal] = useState([]);
    useEffect(()=> {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res => res.json())
        .then(data => setMeal(data.meals[0]))
    }, [mealId]);
    return (
        <>
        <CustomLink className='meal-details-btn' to='/meals'><AiOutlineArrowLeft></AiOutlineArrowLeft>Back</CustomLink>
        <div className='meal-details'>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <div className='meal-details-half'>
            <h2>{meal.strMeal || 'Not Available'}</h2>
            <p><strong>Category: </strong>{meal.strCategory || 'Not Available'}</p>
            <p><strong>Description: </strong>{meal.strInstructions?.slice(0, 400) || 'Not Available'}</p>
            <p><strong>Area: </strong>{meal.strArea || 'Not Available'}</p>
            <p><strong>Tags: </strong>{meal.strTags || 'Not Available'}</p>
            <p className='yt-btn'><strong>Watch Now: </strong><a target="_blank" rel="noreferrer noopener" href={meal.strYoutube || 'Not Available'}><AiOutlineYoutube className='yt-icon'></AiOutlineYoutube></a></p>
            </div>
        </div>
        </>
    );
};

export default MealDetail;