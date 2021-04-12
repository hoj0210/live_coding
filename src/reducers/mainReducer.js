import cities from '../us-cities';

const initialState = {
    cities,
    filteredCities: [],
    index: 0
}

const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FILTER_CITIES':
            let resultCities = []
            if (action.input !== "") {
                resultCities = state.cities.filter(city => {
                    return city.name.toLowerCase().includes(action.input.toLowerCase())
                })
            }
            console.log(resultCities)
            return {
                ...state,
                filteredCities: resultCities
            }
        case 'GET_CURRENT_CITY':
            return {
                ...state,
                index: action.index
            }
        default:
            return state;
            
    }
}

export default mainReducer