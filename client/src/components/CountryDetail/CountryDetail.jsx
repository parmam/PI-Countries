import styles from './CountryDetail.module.css'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {getCountryDetails} from '../../redux/actions'



const CountryDetail = () => {
    const dispatch = useDispatch()
    const countryDetails = useSelector(store => store.countryDetails)
    const {id} = useParams()
    const [details, setDetails] = useState({})
    const [flag, setFlag] = useState(1)

    useEffect(() => {
        if(flag === 1 && details !== countryDetails ){
            dispatch(getCountryDetails(id))
            setFlag(0)
        }

        setDetails(countryDetails)
        console.log(details)
        

    }, [dispatch, countryDetails, details, id])
    
    return (
        <React.Fragment>
                <div className={styles.detailsCtn}>
                    <div className={styles.imgCtn}>
                        <img className={styles.countryImg} src={details.img} ></img>    
                    </div>
                    <div className={styles.content}>
                        <h3>Country information</h3>
                        <p>Country name: {details.name}</p>
                        <p>Capital name: {details.capital}</p>
                        <p>Continent: {details.continent}</p>
                        <p>Subregion: {details.subregion}</p>
                        <p>Area: {details.area}</p>
                        <p>Population: {details.population}</p>
                    </div>
                    <div className={styles.content}>
                        <h3>Activities</h3>
                        <table>
                        <thead >
                            <tr>
                                <th>Name</th>
                                <th>Dificulty</th>
                                <th>Season</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                            (Array.isArray(details.activities )&& details.activities.length)         
                            ? (details.activities.map(a => {
                                return (
                                    <tr >
                                        <td>{a.name} </td>
                                        <td>{a.dificulty}</td>
                                        <td>{a.season.join(", ")}</td>
                                        <td><button className={styles.removeBtn}> x </button></td>
                                    </tr>)
                            }))      
                            : ( <div className={styles.activitiesItem}>
                                    <p>No activities added to this country</p>
                                </div>)  
                            }

                        </tbody>
                        </table>



                        
                        
                    </div>
                    <div className={`${styles.content} ${styles.dContent}`}>
                        <p>lalala</p>
                    </div>
                </div>
                

            
        </React.Fragment>
    )
}

export default CountryDetail