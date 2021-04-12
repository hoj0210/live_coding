import React from 'react'

const CityDetail = ({index, filteredCities}) => {
    return (
        <div>
            <h1>{filteredCities[index].name}</h1>
            <p>Country: {filteredCities[index].country}</p>
            <p>Likes: {filteredCities[index].details.likes}</p>
            <p>Latitude: {filteredCities[index].location.lat}</p>
            <p>Longitude: {filteredCities[index].location.lng}</p>
        </div>
    )
}

export default CityDetail;