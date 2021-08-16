import styles from './CountriesList.module.css';
import React,{useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import CountryCard from '../CountryCard/CountryCard';

const CountriesList = () => {
    const allCountries = useSelector(store => store.allCountries)
    const allFilters = useSelector(store => store.allFilters)
    const [countries, setCountries] = useState([])
    const [flag, setFlag] = useState(2)
    //pagination
    const [countriesPerPage, setCountriesPerPage] = useState([])
    const [page, setPage] = useState(1)
    const [first, setFirst] = useState(0)
    const [last, setLast] = useState(7)
    const [nPages, setNPages] = useState(0)
    const changePage = (e) => {
        if(e.target.name === "PREV" && page >= 1){
            setPage(page - 1);
            setFirst(first - 8);
            setLast(last - 8);
            setFlag(1)
        }
        if(e.target.name === "NEXT"){      
            setPage(page + 1);
            setFirst(first + 8);
            setLast(last + 8);
            setFlag(1)
        }
    }
    useEffect(() => {
        if(flag === 2 || countries !== allCountries && allFilters ) {
            setCountries(allCountries)
            setPage(1)
            setFirst(0)
            setLast(8)
            setFlag(1)
        }
        if(flag === 1){
            setNPages(Math.round(allCountries.length/8))
            setCountriesPerPage(allCountries.slice(first, last))   
            setFlag(0)
        }

    },[countries, allCountries, allFilters, first, last, page, flag, countriesPerPage])

    return(
        <React.Fragment>
            <div className={styles.pageCtn}>
                <button 
                    onClick={(e) => changePage(e)}
                    disabled={page === 1}
                    className={styles.pageBtn}
                    name="PREV"> Prev 
                </button>
                <p className={styles.pageTxt}>{page}</p>
                <button 
                    onClick={(e) => changePage(e)} 
                    className={styles.pageBtn}
                    name="NEXT"
                    disabled={nPages === page}> Next </button>
            </div>
            <div className={styles.cardContainer}>
                {(!countriesPerPage.length) 
                ? <p>loading countries...</p>
                :countriesPerPage.map((c) => (
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