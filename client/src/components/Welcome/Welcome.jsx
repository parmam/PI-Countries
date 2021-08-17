import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Welcome.module.css'
const Welcome = () => {

    return(
        <React.Fragment>
                <div className={styles.container}>

                <p>Welcome</p>
                <Link to="home">                
                    <button type="button"> Go to CountriesApp </button>
                </Link>
                </div>

        </React.Fragment>
    )
}



export default Welcome





