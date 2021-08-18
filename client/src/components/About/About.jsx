import React from 'react'
import styles from './About.module.css'
import face from '../../img/face.jpg'


const About = () => {

    return(
        <React.Fragment>
            <div className={styles.container}>
                <h3>COUNTRIES-PI</h3>
                <h5 className={styles.sub}>Developed by Martin Parma using React, Redux, Express, Sequelize and pure CSS</h5>
                <img src={face} alt="Loading img..." srcset="" className={styles.myImg}/>
            </div>
        </React.Fragment>
    )
}


export default About