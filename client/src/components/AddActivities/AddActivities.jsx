import styles from './AddActivities.module.css';
import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {activitiesPost, getModalCountries} from '../../redux/actions'
import { Link } from 'react-router-dom';


const AddActivities = () => {
    const allCountries = useSelector(store => store.modalCountries);

    const dispatch = useDispatch();
    const [flag, setFlag] = useState(9);
    const [bridge, setBridge] = useState('');
    const [modalCountries, setModalContries] = useState([]);
    const [data, setData] = useState({})
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [activeSeasons, setActiveSeasons] = useState([]);
    const [formKey, setFormKey] = useState(0);
    const [input, setInput] = useState({
        name : "",
        duration:"",
        dificulty : "",
    })


    const submit = (activity, dispatch) => {
        console.log(activity)
        return dispatch(activitiesPost(activity))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(selectedCountries)
        console.log(modalCountries)

        let activity = {
            name : input.name.toLowerCase().trim(),
            duration : input.duration,
            dificulty : input.dificulty,
            countries : selectedCountries,
            season : activeSeasons
        }
        setData(activity)
        alert('activity "' + input.name + '" added sucessfully')
        setModalContries(modalCountries.concat(selectedCountries).sort())
        setSelectedCountries([])
        setFormKey(formKey + 1)
        submit(activity, dispatch)
    }
    const handleChange = (e) => {

            setInput({
                ...input, 
                [e.target.name] : e.target.value
            })
   console.log(e.target.name)

    }
    const handleChecked = (e) => {
        if(e.target.checked){
            setActiveSeasons([...activeSeasons, e.target.value])
        }
        if(!e.target.checked){
            setActiveSeasons(activeSeasons.filter(s => s !== e.target.value))
        }
    }
    const addCountry = (e) => {
        setBridge(e.target.value)    
        setFlag(1)
    }
    const removeCountry = (e) => {
        setBridge(e.target.value)
        setFlag(2)
    }

    useEffect(() => {
        if(flag === 9){
            dispatch(getModalCountries())
            setFlag(0)
        }
        if(allCountries.length && !modalCountries.length){
            setModalContries(allCountries.map((m) => {return m.name}).sort())
        }
        if(bridge && flag === 1){
            setSelectedCountries(([...selectedCountries, bridge]).sort())
            setModalContries(modalCountries.filter((f) => f !== bridge).sort())
            setFlag(0)
            console.log(modalCountries.length)
        }
        if(bridge && flag === 2){
            setModalContries(([...modalCountries, bridge]).sort())
            setSelectedCountries(selectedCountries.filter((f) => f !== bridge).sort())
            setFlag(0)
            console.log(selectedCountries.length)

        }

    },[dispatch, allCountries, selectedCountries, bridge, flag, activeSeasons, modalCountries])


    return(
        <React.Fragment>
            <div className={styles.container}>
                    <div className={styles.formCtn}>
                    <h3 className={styles.formTitle}>Add activities</h3>
                    <form key={formKey} className={styles.aForm} onSubmit={(e) => handleSubmit(e)}>
                        <div className={styles.formItems}>
                            <label htmlFor="name" className={styles.formLabels}>Activity name</label>
                            <input 
                                type="text"  
                                className={styles.formInputs}
                                name="name"
                                onChange={(e) => handleChange(e)}/>
                        </div>
                        <div className={styles.formItems}>
                            <label htmlFor="duration" className={styles.formLabels}>Duration</label>
                            <input 
                                type="number" 
                                value={input.value} 
                                name="duration" 
                                className={styles.formInputs}
                                onChange={(e) => handleChange(e)}/>
                        </div>
                        <div className={styles.formItems}>
                            <label htmlFor="dificulty" className={styles.formLabels}>Dificulty</label>
                            <select  
                                name="dificulty" 
                                className={styles.formInputs}
                                onChange={(e) => handleChange(e)}>
                                <option name="dificulty" value={input.value}>1</option>
                                <option name="dificulty" value={input.value}>2</option>
                                <option name="dificulty" value={input.value}>3</option>
                                <option name="dificulty" value={input.value}>4</option>
                                <option name="dificulty" value={input.value}>5</option>
                            </select>
                        </div>
                        <div className={styles.formItems}>
                            <label htmlFor="season" className={styles.formLabels} value={activeSeasons} onChange={(e) => handleChange(e)}>Season</label>
                            <label htmlFor="season">
                                Autumn
                                <input 
                                    type="checkbox" 
                                    value="autumn"
                                    name="season"
                                    onChange={(e) => handleChecked(e)}/>
                            </label>
                            <label htmlFor="season">
                                Winter
                                <input 
                                    
                                    type="checkbox" 
                                    value="winter"
                                    name="season" 
                                    onChange={(e) => handleChecked(e)}/>
                            </label>
                            <label htmlFor="season">
                                Spring
                                <input 
                                    
                                    type="checkbox" 
                                    value="spring"
                                    name="season" 
                                    onChange={(e) => handleChecked(e)}/>
                            </label>
                            <label htmlFor="season">
                                Summer
                                <input 
                                    
                                    type="checkbox" 
                                    value="summer"
                                    name="season" 
                                    onChange={(e) => handleChecked(e)}/>
                            </label>

                        </div>
                        <div className={styles.formItems}>
                            <label htmlFor="allCountries" className={styles.formLabels}>Countries</label>
                            <select 
                                name="allCountries"
                                className={styles.formInputs}>
                                {
                                modalCountries.map((c) => {
                                    return (
                                        <option 
                                        key={c} 
                                        value={c}
                                        name={c} 
                                        onClick={(e) => addCountry(e)}>{c}</option>)
                                })}
                            </select>
                        </div>
                        <div className={styles.formItems}>

                            <label htmlFor="countries">Selected countries</label>
                            <select 
                                className={styles.formInputs}
                                name="countries" 
                                value={input.value}
                                onChange={(e) => handleChange(e)}>
                            {
                                selectedCountries.map((s) => { 
                                    return(
                                        <option 
                                            name={s} 
                                            onClick={(e) => removeCountry(e)}>{s}
                                        </option>
                                        )
                                    })
                            }
                            </select>

                        </div>
                        <div className={styles.buttonCtn}>
                            <Link className={`${styles.formBtn} ${styles.linkBtn}`} to="/home">
                                <button type="button">Back to home</button>
                            </Link>
                            <input className={`${styles.formBtn} ${styles.addBtn}`} type="submit"  value="Add"/>
                        </div>

                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}



export default AddActivities;   