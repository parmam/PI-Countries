import styles from './CountryCard.module.css'
import React from 'react'
import {Link} from 'react-router-dom'



const CountryCard = ({name, continent, img, id}) => {    
    return (        
        <React.Fragment>
            <div className={styles.cardContainer}>
                <img className={styles.countryImg} src={img}></img>
                <p className={styles.countryText}>Country name: {name}</p>
                <p className={styles.countryText}>Continent: {continent}</p>
                <Link to={`/country/${id}`}>
                    <button type="button">Details</button>
                </Link>
            </div>
        </React.Fragment>
    )   
}

export default CountryCard