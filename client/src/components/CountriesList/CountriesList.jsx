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
    },[dispatch, countries, allCountries])

    return(
        <React.Fragment >
  

            <div className={styles.filterButton}>
                <select name="" id="" className={styles.filterBtn}>
                    <option value="DEFAULT">DEFAULT</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
                <select 
                onChange="" 
                id="" 
                className={styles.filterBtn}
                >
                    <option value="DEFAULT">DEFAULT</option>
                    <option value="ASC">ASC</option>
                    <option value="DESC">DESC</option>
                </select>
            </div>



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