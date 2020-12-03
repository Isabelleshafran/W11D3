import React from 'react';

class PokemonDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount () {
        return this.props.requestSinglePokemon();
    }

    render() { 
        return (
            <div>
                {this.props.name}
                {this.props.attack}
                {this.props.defense}
                {this.props.pokeType}
                <img src={this.props.imageUrl} />
            </div>
        );
    }
}
 


export default PokemonDetail;