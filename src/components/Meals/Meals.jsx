import classes from './Meals.module.css';
import Meal from './Meal/Meal';

function Meals() {
    return (
        <div className={classes.meals}>
            {[1,2,3,4,5,6,7].map((item, index)=> <Meal key={index}/>)}
        </div>
    )
}

export default Meals;
