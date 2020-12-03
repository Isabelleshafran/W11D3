import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
// import {selectSinglePokemon} from '../../reducers/selectors';
import { requestSinglePokemon } from '../../actions/pokemon_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        pokemon: state.entities.pokemon[ownProps.match.params.id]
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        requestSinglePokemon: () => dispatch(requestSinglePokemon(ownProps.match.params.id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)

