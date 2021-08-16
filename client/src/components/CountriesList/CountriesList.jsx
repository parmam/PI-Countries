import styles from './CountriesList.module.css';
import React,{useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import CountryCard from '../CountryCard/CountryCard';

const CountriesList = () => {
    const allCountries = useSelector(store => store.allCountries)
    const allFilters = useSelector(store => store.allFilters)
    const [countries, setCountries] = useState([])
    //pagination
    const [countriesPerPage, setCountriesPerPage] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        if(countries.length === 0)
        setCountries(allCountries)
    },[countries, allCountries, allFilters])


    return(
        <React.Fragment>
            <div className={styles.cardContainer}>
                {(!countries.length) 
                ? <p>loading countries...</p>
                :countries.map((c) => (
                    <CountryCard
                        key={c.id}
                        name = {c.name}
                        continent = {c.continent}
                        img = {c.img}   
                        id = {c.id}
                    />
                    ))}
            </div>

        </React.Fragment>
    )
}


export default CountriesList