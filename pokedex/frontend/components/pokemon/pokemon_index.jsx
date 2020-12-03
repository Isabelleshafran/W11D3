import React from 'react';
import pokemon_index_container from './pokemon_index_container';
import { PokemonIndexItem } from './pokemon_index_item'

class PokemonIndex extends React.Component {
    constructor (props) {
        super(props);
    }


    componentDidMount(){
        return this.props.requestAllPokemon()
    }

    render() {
        return(
            <ul>
                {this.props.pokemon.map(poke => {return(
                        <PokemonIndexItem key={poke.id} pokemon={poke} />
                    );
                })}
            </ul>
        );
    }
}

export default PokemonIndex;
