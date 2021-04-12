import React from 'react';

const Search = ({filterCities}) => {
    const handleChange = e => {
        filterCities(e.currentTarget.value)
    }
    return (
        <div>
            <input placeholder="Start typing to search for cities" onChange={handleChange} />
        </div>
    )
}

export default Search