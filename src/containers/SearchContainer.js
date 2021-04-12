import {connect} from 'react-redux';
import Search from './Search'
import {filterCities} from '../actions/mainActions';

const mapStateToProps = state => {
    return (
        {

        }
    )
}

const mapDispatchToProps = dispatch => {
    return (
        {
            filterCities: (input) => dispatch(filterCities(input))
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)