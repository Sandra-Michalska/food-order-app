import { useContext } from 'react';
import CartContext from '../../store/CartContext';
import UserProgressContext from '../../store/UserProgressContext';
import classes from './Cart.module.css';
import { currencyFormatter } from '../../utils/formatting';
import Modal from '../UI/Modal/Modal';
import Button from '../UI/Button/Button';
import CartItem from './CartItem/CartItem';

function Cart({}) {
    const cartContext = useContext(CartContext);
    const userProgressContext = useContext(UserProgressContext);

    const totalPrice = cartContext.items.reduce(
        (totalPrice, item) => totalPrice + (item.price * item.quantity),
        0
    );

    function handleCloseCart() {
        userProgressContext.hideCart();
    }

    return (
        <Modal open={userProgressContext.progress === 'cart'}>
            <h2>Your cart</h2>
            <ul className={classes.itemsList} >
                {cartContext.items.map(item => (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        price={item.price}
                        onIncrease={() => cartContext.addItem(item)}
                        onDecrease={() => cartContext.removeItem(item.id)}
                    />
                ))}
            </ul>
            <p className={classes.totalPrice}>Total price: {currencyFormatter.format(totalPrice)}</p>
            <p className={classes.modalActions}>
                <Button onClick={handleCloseCart} textOnly>Close</Button>
                {cartContext.items.length > 0 && (
                    <Button onClick={handleCloseCart}>Go to checkout</Button>
                )}
            </p>
        </Modal>
    );
}

export default Cart;
