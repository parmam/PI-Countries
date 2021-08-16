import {GET_COUNTRIES, GET_COUNTRY_DETAILS, CHANGE_ORDER, FILTERS, ACTIVITY_POST} from './actions'


const initialState = {
    allCountries : [],
    countryDetails: {},
    allFilters:{},
    newActivity:{}
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
        case CHANGE_ORDER:

            const {alphabethicOrder, populationOrder} = {...action.payload}
            console.log(populationOrder,' population' , alphabethicOrder, ' alphabethic')
            if (alphabethicOrder === 'A-Z' && populationOrder === 'DEFAULT'){
                state.allCountries.sort((a, b) => {
                    if(a.name < b.name) return -1
                    if(a.name > b.name) return 1
                    return 0
                                 
                })
            }
            if(alphabethicOrder === 'Z-A' && populationOrder === 'DEFAULT'){
                state.allCountries.sort((a, b) => {
                    if(a.name > b.name) return -1
                    if(a.name < b.name) return 1
                    return 0
                                 
                })
            }
            if(populationOrder === 'ASC' && alphabethicOrder === 'DEFAULT'){
                state.allCountries.sort((a, b) => {
                    if(a.population < b.population) return -1
                    if(a.population > b.population) return 1
                    return 0
                                 
                })
            }
            if (populationOrder === 'DESC' && alphabethicOrder === 'DEFAULT') {
                state.allCountries.sort((a, b) => {
                    if(a.population > b.population) return -1
                    if(a.population < b.population) return 1
                    return 0
                                 
                })
            }

            return{
                ...state
            }

        case FILTERS: 
        console.log(action.payload)
            return{
                ...state,
                allFilters: action.payload
        }
        case ACTIVITY_POST: 
            return{
                ...state,
                newActivity: action.payload
            }
        default: 
            return state
        
    }

}