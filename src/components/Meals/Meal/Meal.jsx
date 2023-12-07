import classes from './Meal.module.css';

function Meal({ meal }) {
    return (
        <li className={classes.meal}>
            <article>
                <img className={classes.image} src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
                <div className={classes.content}>
                    <h3>{meal.name}</h3>
                    <p>{meal.price}</p>
                    <p>{meal.description}</p>
                </div>
                <p>
                    <button>Add to cart</button>
                </p>
            </article>
        </li>
    )
}

export default Meal;
