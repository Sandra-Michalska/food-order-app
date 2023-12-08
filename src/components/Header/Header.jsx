import { useContext } from 'react';
import CartContext from '../../store/CartContext.jsx';
import UserProgressContext from '../../store/UserProgressContext.jsx';
import classes from './Header.module.css';
import Button from '../UI/Button/Button';
import logo from '../../assets/logo.jpg';

function Header() {
    const cartContext = useContext(CartContext);
    const userProgressContext = useContext(UserProgressContext);

    const totalCartItems = cartContext.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0);

    function handleShowCart() {
        userProgressContext.showCart();
    }

    return (
        <header className={classes.header}>
            <img src={logo} alt="Burger logo" className={classes.logo} />
            <p className={classes.logoText}>Tasty food</p>

            <nav className={classes.nav}>
                <Button
                    className="font-big"
                    textOnly
                    onClick={handleShowCart}
                >
                    Cart ({totalCartItems})
                </Button>
            </nav>
        </header>
    )
}

export default Header;
