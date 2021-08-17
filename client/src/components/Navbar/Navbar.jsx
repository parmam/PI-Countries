import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {



    return (
        <React.Fragment>
                <div className={styles.nav}>
                    <div className={styles.buttonCtn}>
                        <button className={styles.linkBtn}>Home</button>
                        <button className={styles.linkBtn}>About</button>
                    </div>
                </div>
        </React.Fragment>
    )
}


export default Navbar