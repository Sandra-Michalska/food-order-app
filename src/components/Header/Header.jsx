import { useContext } from 'react';
import classes from './Header.module.css';
import Button from '../UI/Button/Button';
import logo from '../../assets/logo.jpg';
import CartContext from '../../store/CartContext.jsx';

function Header() {
    const cartContext = useContext(CartContext);

    const totalCartItems = cartContext.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0);

    return (
        <header className={classes.header}>
            <img src={logo} alt="Burger logo" className={classes.logo} />
            <p className={classes.logoText}>Tasty food</p>

            <nav className={classes.nav}>
                <Button className="font-big" textOnly>Cart ({totalCartItems})</Button>
            </nav>
        </header>
    )
}

export default Header;
