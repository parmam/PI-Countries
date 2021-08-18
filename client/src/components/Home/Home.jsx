import styles from './Home.module.css';
import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import CountriesList from '../CountriesList/CountriesList';

const Home = () => {


    return (
        <React.Fragment>
            <div className={styles.pageContainer}>
                <div className={styles.wrap}>
                    <SearchForm />
                    <CountriesList />
                </div>
            </div>

        </React.Fragment>
    )
}


export default Home