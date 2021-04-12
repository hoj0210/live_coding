import {connect} from 'react-redux';
import CityDetail from './CityDetail'

const mapStateToProps = state => {
    return (
        {
            index: state.mainReducer.index,
            filteredCities: state.mainReducer.filteredCities,
        }
    )
}

const mapDispatchToProps = dispatch => {
    return (
        {

        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CityDetail)