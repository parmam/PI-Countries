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
    }, [dispatch, countryDetails, details, id])
    
    return (
        <React.Fragment>
            <div className={styles.container}>
                <img src={details.img} className={styles.countryImg}></img>
            </div>
        </React.Fragment>
    )
}

export default CountryDetail