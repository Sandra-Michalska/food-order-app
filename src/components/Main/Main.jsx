import classes from './Main.module.css';
import Heading from '../Heading/Heading';
import Meals from '../Meals/Meals';

function Main() {
    return (
        <main className={classes.main}>
            <Heading />
            <Meals />
        </main>
    )
}

export default Main;
