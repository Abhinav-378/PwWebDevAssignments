import { useState } from 'react';
import './App.css';
import Person from './components/Person';
import Button from './components/Button';
import Header from './components/Header';
import List from './components/List';
function App() {
  function sayHello() {
    console.log("Hello");
  }
  const arr = ["apple", "mango", "banana"]
  return (
    <>
      <h2>1. Person: </h2>
      <Person name="Abhi" age="19" />
      <Person name="Yash" age="22" />

      <h2>2. Button: </h2>
      <Button text="Click me" fun={sayHello} />

      <h2>3. Header: </h2>
      <Header title="Apple"/>

      <h2>4. List: </h2>
      <List arr={arr}/>
    </>
  );
}

export default App;
