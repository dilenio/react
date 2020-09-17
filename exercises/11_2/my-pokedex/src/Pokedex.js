import React, { Component } from 'react';
import propTypes from 'prop-types';
import data from './data';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.handleType = this.handleType.bind(this);

    this.state = {
      numberOfPokemon: 0,
      typeOfPokemons: '',
    };
  }

  handleClick(param) {
    if (param > data.length - 1) {
      this.setState((previewState) => ({
        numberOfPokemon: 0,
      }));
    } else if (param < 0) {
      this.setState((previewState) => ({
        numberOfPokemon: data.length - 1,
      }));
    } else {
      this.setState((previewState) => ({
        numberOfPokemon: param,
      }));
    }
  }

  handleType(param) {
    this.setState((previousState) => ({
      typeOfPokemons: param,
      numberOfPokemon: 0,
    }));

    console.log([...new Set(data.map((element) => element.type))]);
    console.log([
      ...new Set(data.reduce((types, { type }) => [...types, type], [])),
    ]);
  }

  render() {
    return (
      <div>
        <h1 className="title">Pokedex</h1>
        <div className="container">
          <button
            onClick={() => this.handleClick(this.state.numberOfPokemon - 1)}
          >
            Previous
          </button>
          {data
            .filter((element) =>
              element.type.includes(this.state.typeOfPokemons)
            )
            .filter((element, index) => index === this.state.numberOfPokemon)
            .map((poke) => (
              <Pokemon
                key={poke.id}
                name={poke.name}
                type={poke.type}
                averageWeightValue={poke.averageWeight.value}
                averageWeightMeasurementUnit={
                  poke.averageWeight.measurementUnit
                }
                image={poke.image}
              />
            ))}
          <button
            onClick={() => this.handleClick(this.state.numberOfPokemon + 1)}
          >
            Next
          </button>
        </div>
        <p>
          Len: {data.length} State: {this.state.numberOfPokemon} Filter:{' '}
          {this.state.typeOfPokemons}
        </p>
        <button onClick={() => this.handleType('')}>All</button>
        <button onClick={() => this.handleType('Psychic')}>Psychic</button>
        <button onClick={() => this.handleType('Fire')}>Fire</button>
      </div>
    );
  }
}

Pokemon.propTypes = {
  name: propTypes.string,
  type: propTypes.string,
  averageWeightValue: propTypes.number,
  averageWeightMeasurementUnit: propTypes.string,
  image: propTypes.string,
};

export default Pokedex;
