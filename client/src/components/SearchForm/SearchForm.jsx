import styles from './SearchForm.module.css'
import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { getCountries } from '../../redux/actions';
import { useModal } from '../../hooks/useModal';
import Modal from '../Modal/Modal';
import AddActivities from '../AddActivities/AddActivities';


const SearchForm = () => {

    const [isOpenActivitiesModal, openActivitiesModal, closeActivitiesModal] = useModal(false)
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
        </React.Fragment>
    )
}

export default SearchForm