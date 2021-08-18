import AddActivities from '../components/AddActivities/AddActivities'
import {GET_COUNTRIES, GET_COUNTRY_DETAILS, ACTIVITY_GET, ACTIVITY_POST, GET_MODAL_COUNTRIES} from './actions'


const initialState = {
    allCountries : [],
    countryDetails: {},
    newActivity:{},
    allActivities:[],
    modalCountries:[]
}

export default function rootReducer (state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES: 
        const {data, alphabethicOrder, populationOrder} = {...action.payload}
        console.log(populationOrder,' population' , alphabethicOrder, ' alphabethic')
        if (alphabethicOrder === 'A-Z' && populationOrder === 'DEFAULT'){
            data.sort((a, b) => {
                if(a.name < b.name) return -1
                if(a.name > b.name) return 1
                return 0
                             
            })
        }
        if(alphabethicOrder === 'Z-A' && populationOrder === 'DEFAULT'){
            data.sort((a, b) => {
                if(a.name > b.name) return -1
                if(a.name < b.name) return 1
                return 0
                             
            })
        }
        if(populationOrder === 'ASC' && alphabethicOrder === 'DEFAULT'){
            data.sort((a, b) => {
                if(a.population < b.population) return -1
                if(a.population > b.population) return 1
                return 0
                             
            })
        }
        if (populationOrder === 'DESC' && alphabethicOrder === 'DEFAULT') {
            data.sort((a, b) => {
                if(a.population > b.population) return -1
                if(a.population < b.population) return 1
                return 0
                             
            })
        }
            return{
                ...state,
                allCountries: data
            }  
        case GET_COUNTRY_DETAILS:
            return {
                ...state,
                countryDetails: action.payload
            }

        case ACTIVITY_POST: 
            return{
                ...state,
                newActivity: action.payload
            }

        case ACTIVITY_GET:
            return{
                ...state,
                allActivities: action.payload
            }
        case GET_MODAL_COUNTRIES: {
            return{
                ...state,
                modalCountries: action.payload
            }
        }
        default: 
            return state
        
    }

}