import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_POKEMON:
            // Object.entries(action.pokemon).forEach(poke_id => {
            //     nextState[poke_id] = action.pokemon[poke_id];
            // }) 
            // for(let poke_id in action.pokemon){
            //     nextState[poke_id] = action.pokemon[poke_id];
            // }
            nextState = action.pokemon; 
            return nextState;
        case RECEIVE_SINGLE_POKEMON:
            nextState = {...nextState, ...action.pokemon.pokemon}
            // nextState[action.pokemon.pokemon.id] = action.pokemon;
            return nextState;
        default:
            return state;
    }
    
}

export default pokemonReducer;