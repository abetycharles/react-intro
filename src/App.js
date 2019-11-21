import React from 'react';
import logo from './logo.svg';
import './App.css';

function Welcome(props){
  // let co = {};
  // co.color = props.color ? props.color : 'red';
  // or:
  const colorObj = {};
  colorObj.color = props.color
  return (
      <div>
        <h1>{props.greet} {props.name}!</h1>
        <h3 style={colorObj}>Do you have a {props.pet}?</h3>
      </div>
  );
}


function App() {

  return (
    <div>
      <Welcome name="Era" greet="Welcome" pet="dog" color='cyan'/>
      <Welcome name="Sue" greet="Goodbye" pet="cat" color='blue'/>
      <Welcome name="Bob" greet="Goodbye" pet="rabbit"/>
    </div>
  );
}

export default App;
