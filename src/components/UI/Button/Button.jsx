import classes from './Button.module.css';

function Button({ children, textOnly, className, ...props }) {
    const buttonStyles = [
        className ? className : '',
        textOnly ? classes.textButton : classes.button
    ].join(' ');

    return (
        <button className={buttonStyles} {...props}>{children}</button>
    );
}

export default Button;
