import React from 'react';
import './App.css';
import Forms from './Forms';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <form>
          <Forms />
        </form>
      </div>
    );
  }
}

export default App;
