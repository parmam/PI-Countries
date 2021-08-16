import styles from './SearchForm.module.css'
import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, allFilters, orderBy } from '../../redux/actions';
import { useModal } from '../../hooks/useModal';
import Modal from '../Modal/Modal';
import AddActivities from '../AddActivities/AddActivities';


const SearchForm = () => {

    const [isOpenActivitiesModal, openActivitiesModal, closeActivitiesModal] = useModal(false)
    const [contienentFilter, setContinentFilter] = useState('DEFAULT')
    const [activityFilter, setActivityFilter] = useState('DEFAULT')
    const [populationOrder, setPopulationOrder] = useState('DEFAULT')
    const [alphabethicOrder, setAlphabethicOrder] = useState('A-Z')
    const [search, setSearch] = useState('')
    const [countries, setCountries] = useState([])
    const [flag, setFlag] = useState(1)


    const allCountries = useSelector(store => store.allCountries)
    const filters = useSelector(store=> store.allFilters)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getCountries(search, activityFilter, contienentFilter))
    }
    const handleChange = (e) => {
        setSearch(e.target.value)
    }



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


    useEffect(() => {
        if(flag === 2){
            dispatch(orderBy(alphabethicOrder, populationOrder))
            dispatch(allFilters(activityFilter, contienentFilter))
            setFlag(0)
        }
        if(flag === 1) {
            dispatch(getCountries(activityFilter, contienentFilter))
            setFlag(0)
        }
        setCountries(allCountries)
    },[dispatch, flag, alphabethicOrder, populationOrder, activityFilter, contienentFilter, allCountries, countries])
    
    return (
        <React.Fragment>
            <div className={styles.container}>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label 
                        className={`${styles.formTitle}`}>Search country
                    </label>
                    <input 
                        className={styles.li}
                        type="text" 
                        value={search.value}
                        onChange={(e) => handleChange(e)}
                    />
                    <div className={styles.buttonCtn}>
                        <button 
                            className={styles.formBtn} type="submit">Search
                        </button>
                        <button
                            onClick={() => openActivitiesModal()}
                            className={styles.formBtn} type="button">Add Activities
                        </button>
                        <Modal isOpen={isOpenActivitiesModal} closeModal={closeActivitiesModal}>
                            <AddActivities />
                        </Modal>
                        
                    </div>
                </form>
            </div>
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
                    <option value="Africa">AFRICA</option>
                    <option value="Americas">AMERICA</option>
                    <option value="Asia">ASIA</option>
                    <option value="Europe">EUROPE</option>
                    <option value="Oceania">OCEANIA</option>
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
        </React.Fragment>
    )
}

export default SearchForm