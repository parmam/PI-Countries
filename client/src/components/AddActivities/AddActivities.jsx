import styles from './AddActivities.module.css'
import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';


const AddActivities = (closeActivitiesModal) => {
    console.log(closeActivitiesModal)


    return(
        <React.Fragment>
            <div className={styles.container}>
                <h3 className={styles.formTitle}>Add activities</h3>
                <form className={styles.aForm}>
                    <div>
                        <label className={styles.formLabels}>Activity</label>
                        <input type="text"  className={styles.formInputs}/>
                    </div>
                    <div>
                        <label className={styles.formLabels}>Dificulty</label>
                        <select name="" id="" className={styles.formInputs}>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                        </select>
                    </div>
                    <div>
                        <label className={styles.formLabels}>Season</label>
                        <select name="" id="" className={styles.formInputs}>
                            <option value="">Autumn</option>
                            <option value="">Winter</option>
                            <option value="">Spring</option>
                            <option value="">Summer</option>
                        </select>
                    </div>
                    <div>
                        <label className={styles.formLabels}>Countries</label>
                        <select name="" id="" className={styles.formInputs}>

                        </select>
                    </div>

                </form>
                <div className={styles.buttonCtn}>
                        <button>Submit</button>
                </div>
            </div>
        </React.Fragment>
    )
}



export default AddActivities;