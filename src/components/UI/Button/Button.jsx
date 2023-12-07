import classes from './Button.module.css';

function Button({ children, textOnly, ...props }) {
    const buttonStyles = [
        textOnly ? classes.textButton : classes.button
    ].join(' ');

    return (
        <button className={buttonStyles} {...props}>{children}</button>
    );
}

export default Button;
