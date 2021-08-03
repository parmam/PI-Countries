import styles from './CountriesList.module.css';
import React,{useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../redux/actions';
import CountryCard from '../CountryCard/CountryCard';

const CountriesList = () => {
    const allCountries = useSelector(store => store.allCountries)
    const dispatch = useDispatch()
    const [flag, setFlag] = useState(1)
    const [countries, setCountries] = useState([])


    useEffect(() =>{
        if(flag === 1){
            dispatch(getCountries())
            setFlag(0)
        }
        setCountries(allCountries)
        console.log(countries)
    },[dispatch, countries, allCountries])

    return(
        <React.Fragment >
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