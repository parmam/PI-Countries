import styles from './Home.module.css';
import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import CountriesList from '../CountriesList/CountriesList';

const Home = () => {


    return (
        <React.Fragment>

            <SearchForm />
            <CountriesList />

        </React.Fragment>
    )
}


export default Home