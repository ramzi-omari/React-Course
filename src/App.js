import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';


class App extends Component {
  render(){
  return (
    <div className="App">
        <Greet></Greet>
        <Welcome></Welcome>
        <Hello></Hello>
        {/* props functionnal component */}
        <Greet name="ramzi" heroname= "suuper">
          <p> this's children props</p>
        </Greet>
        <Greet name="clark" heroname= "wonder">
          <button>children button</button>
          <p>children props</p>
        </Greet>
        <Greet name="Diana"></Greet>
        {/* props class component  */}
        <Welcome name="ramzi" heroname= "suuper">
          <p>loool</p> <p>children props in class component</p>
        </Welcome>
        <Welcome name="clark" heroname= "wonder"></Welcome>

        {/* State */}

        <Message></Message>
        <Counter></Counter>
        <FunctionClick></FunctionClick>
        <ClassClick></ClassClick>
        <EventBind></EventBind>
        <ParentComponent></ParentComponent>
    </div>   
  );
}}

export default App;
