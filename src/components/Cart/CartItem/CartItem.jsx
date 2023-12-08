import classes from './CartItem.module.css';
import { currencyFormatter } from '../../../utils/formatting.js';

function CartItem({
    name,
    quantity,
    price,
    onIncrease,
    onDecrease,
}) {
    return (
        <li className={classes.cartItem}>
            <p className={classes.text}>
                {name} - {quantity} x {currencyFormatter.format(price)}
            </p>
            <p className={classes.actions}>
                <button className={classes.button} onClick={onDecrease}>-</button>
                <span>{quantity}</span>
                <button className={classes.button} onClick={onIncrease}>+</button>
            </p>
        </li>
    );
}

export default CartItem;