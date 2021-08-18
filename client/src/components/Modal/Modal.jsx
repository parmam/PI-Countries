import React from "react"
import styles from "./Modal.module.css"


const Modal = ({children, isOpen, closeModal}) => {

const handlePropagation = (e) => e.stopPropagation()



    return (
        <React.Fragment>
            <div className={`${styles.container} ${isOpen && `${styles.opened}`}`} onClick={closeModal}>
                <div className={styles.content} onClick={handlePropagation}>
                    <button  className={styles.closeModalBtn} onClick={closeModal}>x</button>
                    {children}

                </div>

            </div>
        </React.Fragment>
    )




}



export default Modal