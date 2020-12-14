import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
// import Welcome from './component/Welcome';
// import Hello from './component/hello'


class App extends Component {
  render(){
  return (
    <div className="App">
        <Greet></Greet>
    </div>   
  );
}}

export default App;
