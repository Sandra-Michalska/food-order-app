import { useContext } from 'react';
import { currencyFormatter } from '../../../utils/formatting.js'; 
import Button from '../../UI/Button/Button.jsx';
import classes from './Meal.module.css';
import CartContext from '../../../store/CartContext.jsx';

function Meal({ meal }) {
    const cartContext = useContext(CartContext);

    function handleAddMealToCart() {
        cartContext.addItem(meal);
    }

    return (
        <li className={classes.meal}>
            <article>
                <img className={classes.image} src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
                <div className={classes.content}>
                    <h3>{meal.name}</h3>
                    <p className={classes.price}>{currencyFormatter.format(meal.price)}</p>
                    <p className={classes.description}>{meal.description}</p>
                </div>
                <p className={classes.buttonWrapper}>
                    <Button onClick={handleAddMealToCart}>Add to cart</Button>
                </p>
            </article>
        </li>
    )
}

export default Meal;
