import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx';
import { receiveAllPokemon, requestAllPokemon, requestSinglePokemon } from './actions/pokemon_actions';
import { fetchAllPokemon } from './util/api_util';
import configureStore from './store/store'
import { selectAllPokemon } from './reducers/selectors'

document.addEventListener('DOMContentLoaded', () => {
    
    const store = configureStore()

    // testing
    // window.fetchAllPokemon = fetchAllPokemon; 
    // window.receiveAllPokemon = receiveAllPokemon;
    // window.store = store
    // window.getState = store.getState; 
    // window.requestAllPokemon = requestAllPokemon;
    // window.selectAllPokemon = selectAllPokemon;
    // window.pokemonReducer = pokemonReducer;
    
    window.requestSinglePokemon = requestSinglePokemon;
    window.dispatch = store.dispatch;
    // testing

    const root = document.getElementById('root');
    ReactDOM.render(
        <Root store={store} />
        ,root
    )
})