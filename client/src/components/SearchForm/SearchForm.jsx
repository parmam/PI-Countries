import styles from './SearchForm.module.css'
import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { getCountries } from '../../redux/actions';

const SearchForm = () => {
    const [search, setSearch] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getCountries(search))
    }
    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <React.Fragment>
            <div className={styles.container}>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label htmlFor="">Search country</label>
                    <input 
                        type="text" 
                        value={search.value}
                        onChange={(e) => handleChange(e)}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
        </React.Fragment>
    )
}

export default SearchForm