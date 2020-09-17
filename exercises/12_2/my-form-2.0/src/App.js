import React from 'react';
import './App.css';
import InputName from './InputName';

class App extends React.Component {
  constructor() {
    super();

    this.state = { name: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value.toUpperCase() });
  }

  render() {
    return (
      <div>
        <form>
          <fieldset>
            <legend>Dados Pessoais</legend>
            <InputName
              name={this.state.name}
              handleChange={this.handleChange}
            />
            <InputText
              value={this.state.name}
              name="name"
              handleChange={this.handleChange}
            />
            <input type="submit" value="Enviar" />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default App;
