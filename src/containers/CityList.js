import React from 'react'

const CityList = ({filteredCities, getCurrentCity}) => {
    const handleClick = index => {
        getCurrentCity(index);
    }
    return (
        <div>
            <ul>
                {filteredCities.map((city, i) => {
                    return (
                        <li onClick={() => handleClick(i)}>{city.name}, {city.country}, {city.details.likes}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default CityList