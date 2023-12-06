import classes from './Meal.module.css';
import meal from '../../../assets/logo.jpg';

function Meal() {
    return (
        <div className={classes.meal}>
            <img className={classes.image} src={meal} alt="meal 1" />
            <div className={classes.content}>
                <p>mniam mniam</p>
                <p>price</p>
                <p>description</p>
                <button>Add to cart</button>
            </div>
        </div>
    )
}

export default Meal;
