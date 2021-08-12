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
    const [contienentFilter, setContinentFilter] = useState('DEFAULT')
    const [activityFilter, setActivityFilter] = useState('DEFAULT')
    const [populationOrder, setPopulationOrder] = useState('DEFAULT')
    const [alphabethicOrder, setAlphabethicOrder] = useState('A-Z')


    useEffect(() =>{
        if(flag === 1){
            dispatch(getCountries())
            setFlag(0)
        }
        setCountries(allCountries)
    },[dispatch, countries, allCountries, alphabethicOrder, populationOrder, activityFilter, contienentFilter])



    const orderByAz = (e) => {
        setAlphabethicOrder(e.target.value)
        console.log(alphabethicOrder)
    }

    const orderByPopulation = (e) => {
        setPopulationOrder(e.target.value)
        console.log(populationOrder)
    }

    const filterByActivity = (e) => {
        setActivityFilter(e.target.value)
        console.log(activityFilter)
    }

    const filterByContinent = (e) => {
        setContinentFilter(e.target.value)
        console.log(contienentFilter)
    }



 

    return(
        <React.Fragment >
  

            <div className={styles.filtersCtn}>
                <select 
                name="" 
                id="" 
                className={styles.filterBtn}
                onChange={(e) => orderByAz(e)}
                >
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
                
                <select 
                onChange="" 
                id="" 
                className={styles.filterBtn}
                onChange={(e) => orderByPopulation(e)}
                >
                    <option value="DEFAULT">DEFAULT</option>
                    <option value="ASC">ASC</option>
                    <option value="DESC">DESC</option>
                </select>

                <select 
                name="" 
                id="" 
                className={styles.filterBtn}
                onChange={(e) => filterByContinent(e)}
                >
                    <option value="DEFAULT">ALL CONTINENTS</option>
                    <option value="AFRICA">AFRICA</option>
                    <option value="AMERICA">AMERICA</option>
                    <option value="ASIA">ASIA</option>
                    <option value="EUROPE">EUROPE</option>
                    <option value="OCAENIA">OCEANIA</option>
                </select>

                <select 
                name="" 
                id="" 
                className={styles.filterBtn}
                onChange={(e) => filterByActivity(e)}
                >
                    <option value="DEFAULT">DEFAULT</option>
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