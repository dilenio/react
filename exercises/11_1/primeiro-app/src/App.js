import React from 'react';
import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const arrayTasks = ['Acordar', 'Levantar', 'Tomar desjejum', 'Ir pra academia', 'Trabalhar', 'Estudar'];
  return (
    arrayTasks.map(element => task(element))
    );
}

export default App;
