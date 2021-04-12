export const filterCities = (input) => ({
    type: 'FILTER_CITIES',
    input
})

export const getCurrentCity = (index) => ({
    type: 'GET_CURRENT_CITY',
    index
})