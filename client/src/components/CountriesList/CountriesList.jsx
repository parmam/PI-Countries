import styles from './CountriesList.module.css';
import React,{useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, orderBy, allFilters } from '../../redux/actions';
import CountryCard from '../CountryCard/CountryCard';

const CountriesList = () => {
    const allCountries = useSelector(store => store.allCountries)
    const filters = useSelector(store=> store.allFilters)
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
        if(flag === 2){
            dispatch(orderBy(alphabethicOrder, populationOrder))
            dispatch(allFilters(activityFilter, contienentFilter))
            setFlag(0)
        }
        setCountries(allCountries)

    },[dispatch, countries, allCountries, alphabethicOrder, populationOrder, activityFilter, contienentFilter, filters])



    const orderByAz = (e) => {
        setAlphabethicOrder(e.target.value)
        setPopulationOrder('DEFAULT')
        document.getElementById('POPULATION').value = 'DEFAULT'

        console.log(populationOrder)
        console.log(alphabethicOrder)
        setFlag(2)
    }

    const orderByPopulation = (e) => {
        setPopulationOrder(e.target.value)
        setAlphabethicOrder('DEFAULT')
        document.getElementById('AZ').value = 'DEFAULT'
        console.log(populationOrder)
        setFlag(2)
    }

    const filterByActivity = (e) => {
        setActivityFilter(e.target.value)
        console.log(activityFilter)

        setFlag(2)
    }

    const filterByContinent = (e) => {
        setContinentFilter(e.target.value)

        console.log(contienentFilter)

        setFlag(2)
    }



 

    return(
        <React.Fragment >
            <div className={styles.filtersCtn}>
                <select 
                name="" 
                id="AZ" 
                className={styles.filterBtn}
                onChange={(e) => orderByAz(e)}
                >
                    <option value="DEFAULT">DEFAULT</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
                
                <select 
                onChange="" 
                id="POPULATION" 
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