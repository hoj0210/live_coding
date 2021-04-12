import {connect} from 'react-redux'
import CityList from './CityList'
import {getCurrentCity} from '../actions/mainActions';

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
            getCurrentCity: (index) => dispatch(getCurrentCity(index)),
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList)