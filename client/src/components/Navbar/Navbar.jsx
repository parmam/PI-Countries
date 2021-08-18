import React from 'react'
import styles from './Navbar.module.css'
import {Link} from 'react-router-dom'
const Navbar = () => {



    return (
        <React.Fragment>
                <div className={styles.nav}>
                    <div className={styles.buttonCtn}>
                        <Link to="/home">
                            <button className={styles.linkBtn}>Home</button>
                        </Link>
                        <Link to="/about">
                            <button className={styles.linkBtn}>About</button>                       
                        </Link>

                    </div>
                </div>
        </React.Fragment>
    )
}


export default Navbar