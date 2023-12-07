import classes from './Header.module.css';
import Button from '../UI/Button/Button';
import logo from '../../assets/logo.jpg';

function Header() {
    return (
        <header className={classes.header}>
            <img src={logo} alt="Burger logo" className={classes.logo} />
            <p className={classes.logoText}>Tasty food</p>

            <nav className={classes.nav}>
                <Button textOnly>Cart</Button>
            </nav>
        </header>
    )
}

export default Header;
