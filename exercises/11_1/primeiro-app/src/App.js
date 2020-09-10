import React from 'react';

const arrayTasks = ['Acordar', 'Levantar', 'Tomar desjejum', 'Ir pra academia', 'Trabalhar', 'Estudar'];

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <ul>
      {arrayTasks.map(element => task(element))}
    </ul>
  );
}

export default App;
