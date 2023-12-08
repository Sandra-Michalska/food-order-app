import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import classes from './Modal.module.css';

function Modal({ children, open, className = '' }) {
    const dialogRef = useRef();

    useEffect(() => {
        const modal = dialogRef.current;

        if(open) {
            modal.showModal();
        }

        return () => modal.close();
    }, [open]);
    
    return createPortal(
        <dialog
            ref={dialogRef}
            className={`${classes.modal} ${className}`}
        >
            {children}
        </dialog>,
        document.getElementById('modal')
    );
}

export default Modal;
