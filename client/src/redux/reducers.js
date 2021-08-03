import {GET_COUNTRIES, GET_COUNTRY_DETAILS} from './actions'


const initialState = {
    allCountries : [],
    countryDetails: {}  
}

export default function rootReducer (state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES: 
            return{
                ...state,
                allCountries: action.payload
            }  
        case GET_COUNTRY_DETAILS:
            return {
                ...state,
                countryDetails: action.payload
            }
            
        default: 
            return state
        
    }

}