import axios from 'axios';

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY_DETAILS = 'GET_COUNTRY_DETAILS';
export const CHANGE_ORDER = 'CHANGE_ORDER';
export const ACTIVITY_POST = 'ACTIVITY_POST';
export const ACTIVITY_GET = "ACTIVITY_GET";
export const GET_MODAL_COUNTRIES = "GET_MODAL_COUNTRIES";

export const getCountries = (search, activityFilter, contienentFilter, alphabethicOrder, populationOrder) => {
    return(dispatch) => {
        let data = [];
        console.log(search)
        axios.get(`http://localhost:3001/countries?name=${search}&activity=${activityFilter}&continent=${contienentFilter}`)
        .then(response => {
            console.log(data)
            data = response.data
            dispatch({  
                type: GET_COUNTRIES,
                payload: {data, alphabethicOrder, populationOrder}
            })
        })
    }
}

export const getModalCountries = () => {
    return(dispatch) => {
        let data = [];
        axios.get(`http://localhost:3001/countries?name=&activity=DEFAULT&continent=DEFAULT`)
        .then(response => {
            console.log(data)
            data = response.data
            dispatch({  
                type: GET_MODAL_COUNTRIES,
                payload: data
            })
        })
    }
}


export const getCountryDetails = (id) => {
    return (dispatch) => {
        let data = {}
        axios.get(`http://localhost:3001/countries/${id}`)
        .then(response => {
            data = response.data
            console.log(data)
            dispatch({
                type: GET_COUNTRY_DETAILS,
                payload: data
            })
        })
    }
}

export const activitiesPost = (activity) => {
    return(dispatch) => {
        axios.post(`http://localhost:3001/activity`, {activity})
        .then(response =>{
            dispatch({
                type: ACTIVITY_POST,
                payload: response
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const activitiesGet = () => {
    return (dispatch) =>{
        axios.get(`http://localhost:3001/activity`)
        .then(response =>
            dispatch({
                type:ACTIVITY_GET,
                payload: response.data
        }))
        .catch(error => {
            console.log(error)
        })
    }
}