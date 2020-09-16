import React, { Component } from 'react';

class Pokemon extends Component {
  render() {
    const { 
      name,
      type,
      averageWeightValue,
      averageWeightMeasurementUnit,
      image
    } = this.props;
    return (
      <div className="card">
        <div className="image"><img className="image-gif" src={image} alt={name} /></div>
        <div className="info">
          <div>
            <h2 className="title">{name}</h2>
          </div>
          <div className="type">
            <p className="g-type">{type}</p>
            <p className="weight">{averageWeightValue}{averageWeightMeasurementUnit}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Pokemon;
