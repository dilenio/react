import React, { Component } from 'react';

class InputText extends Component {
  render() {
    const { name, value, handleChange } = this.props;
    return (
      <label>
        {name}:
        <input
          type="text"
          name={name}
          value={name}
          onChange={handleChange}
          required="required"
          maxLength="40"
        />
      </label>
    );
  }
}

export default InputName;
