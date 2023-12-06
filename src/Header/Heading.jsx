import classes from './Heading.module.css';

function Heading() {
    return (
        <div className={classes.headingWrapper}>
            <h1 className={classes.h1}>Menu</h1>
            <h2 className={classes.h2}>Check out our delicious meals...</h2>
        </div>
    )
}

export default Heading;
