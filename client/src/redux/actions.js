import axios from 'axios'


export const GET_COUNTRIES = 'GET_COUNTRIES'
export const GET_COUNTRY_DETAILS = 'GET_COUNTRY_DETAILS'

export const getCountries = (search) => {
    return(dispatch) => {
        let data = []
        if(search){
            axios.get(`http://localhost:3001/countries?name=${search}`)
            .then(response => {
                data = response.data
                dispatch({  
                    type: GET_COUNTRIES,
                    payload: data
                })
            })
        }
        if(!search){
            axios.get(`http://localhost:3001/countries`)
            .then(response => {
                data = response.data          
                dispatch({  
                    type: GET_COUNTRIES,
                    payload: data
                })
            })
        }

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