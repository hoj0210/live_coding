import React from 'react';
import SearchContainer from './containers/SearchContainer';
import CityDetailContainer from './containers/CityDetailContainer';
import CityListContainer from './containers/CityListContainer';
import {conenct, connect} from 'react-redux';

function App({filteredCities}) {
  return (
    <div>
      <h1>React Typeahead</h1>
      <SearchContainer/>
      <div style={{display: "flex"}}>
         <CityListContainer/>
        {filteredCities.length !== 0 && <CityDetailContainer/>}
      </div>
     
    </div>
  );
}

const mapStateToProps = state => {
  return (
    {
      filteredCities: state.mainReducer.filteredCities
    }
  )
}

const mapDispatchToProps = dispatch => {
  return (
    {

    }
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
