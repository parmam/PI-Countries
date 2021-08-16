import axios from 'axios';
export const FILTERS = 'FILTERS';
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY_DETAILS = 'GET_COUNTRY_DETAILS';
export const CHANGE_ORDER = 'CHANGE_ORDER';
export const ACTIVITY_POST = 'ACTIVITY_POST';

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
export const orderBy = (alphabethicOrder, populationOrder) => {
    return (dispatch) => {
        dispatch({
            type: CHANGE_ORDER,
            payload: {alphabethicOrder, populationOrder}
        })

    }
}
// export const allFilters = (activityFilter, contienentFilter) => {
//     return (dispatch) => {
//         dispatch({
//             type: FILTERS,
//             payload: {activityFilter, contienentFilter}
//         })
//     }
// }
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