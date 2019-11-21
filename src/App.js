import React from 'react';
import logo from './logo.svg';
import './App.css';

function formatName(user){
  return user.firstName + ' ' + user.lastName;
}
function App() {
  const user = {
    firstName: "Charles",
    lastName: "Abety"
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hello, my name is  {user.firstName} {user.lastName} </p>
        <p>Also, i am fancy: {formatName(user)}</p>
        <p>With ES6... look at you -:) {`${user.firstName} ${user.lastName}`}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
