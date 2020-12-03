import {RECEIVE_SINGLE_POKEMON} from '../actions/pokemon_actions'

const itemsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type){
        case RECEIVE_SINGLE_POKEMON:
            // nextState.items
            nextState = { ...nextState, ...action.pokemon.items }
            return nextState;
        default: 
            return state
    }
}

export default itemsReducer;