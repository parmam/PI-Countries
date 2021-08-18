import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Welcome.module.css'
const Welcome = () => {

    return(
        <React.Fragment>
                <div className={styles.container}>

                <p className={styles.title}>Welcome</p>
                <Link to="home">                
                    <button className={styles.btn} type="button"> Go to CountriesApp </button>
                </Link>
                </div>

        </React.Fragment>
    )
}



export default Welcome





