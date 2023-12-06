import classes from './Header.module.css';
import logo from '../assets/logo.jpg';

function Header() {
    return (
        <header className={classes.header}>
            <img src={logo} alt="Burger logo" className={classes.logo} />
            <p className={classes.logoText}>TASTY FOOD</p>

            <p className={classes.cartText}>Cart</p>
        </header>
    )
}

export default Header;
