import { useState, useEffect } from 'react';
import classes from './Meals.module.css';
import Meal from './Meal/Meal';

function Meals() {
    const [loadedMeals, setLoadedMeals] = useState([]);

    useEffect(() => {
        async function fetchMeals() {
            const response = await fetch('http://localhost:3000/meals');
    
            if(!response.ok) {
                //
            }
    
            const meals = await response.json();
            setLoadedMeals(meals);
        }

        fetchMeals();
    }, []);

    return (
        <ul className={classes.meals}>
            {loadedMeals.map(meal => <Meal key={meal.id} meal={meal} />)}
        </ul>
    )
}

export default Meals;
