import React, { Component } from 'react';
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
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './Advanced/FragmentDemo';
import Table from './Advanced/Table';
import PureComp from './Advanced/PureComp';
import ParentComp from './Advanced/ParentComp';
import Refs from './Advanced/Refs';
import FocusInput from './Advanced/FocusInput';
import FRParentInput from './Advanced/FRParentInput';
import PortalDemo from './Advanced/PortalDemo';
import Hero from './Advanced/Hero';
import ErrorBoundary from './Advanced/ErrorBoundary';
import ClickCounter from './Advanced/ClickCounter';
import HoverCounter from './Advanced/HoverCounter';
import ClickCounterTwo from './Advanced/ClickCounterTwo';
import HoverCounterTwo from './Advanced/HoverCounterTwo';
import User from './Advanced/User';


class App extends Component {
  render() {
    return (
      // Fundamentals 
      <div className="App">
        <Greet></Greet>
        <Welcome></Welcome>
        <Hello></Hello>
        {/* props functionnal component */}
        <Greet name="ramzi" heroname="suuper">
          <p> this's children props</p>
        </Greet>
        <Greet name="clark" heroname="wonder">
          <button>children button</button>
          <p>children props</p>
        </Greet>
        <Greet name="Diana"></Greet>
        {/* props class component  */}
        <Welcome name="ramzi" heroname="suuper">
          <p>loool</p> <p>children props in class component</p>
        </Welcome>
        <Welcome name="clark" heroname="wonder"></Welcome>

        {/* State */}

        <Message></Message>
        <Counter></Counter>
        <FunctionClick></FunctionClick>
        <ClassClick></ClassClick>
        <EventBind></EventBind>
        <ParentComponent></ParentComponent>
        <UserGreeting></UserGreeting>
        <NameList></NameList>
        <Stylesheet primary={true} ></Stylesheet>
        <Inline></Inline>

        <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1>

        <Form></Form>

        <LifecycleA></LifecycleA>

        {/* Advanced Topics */}

        <FragmentDemo></FragmentDemo>
        <Table></Table>
        <ParentComp></ParentComp>export
        <Refs></Refs>
        <FocusInput></FocusInput>
        <FRParentInput></FRParentInput>

        <PortalDemo></PortalDemo>
        <ErrorBoundary>
          <Hero heroName='Batman'></Hero>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName='Superman'></Hero>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName='Joker'></Hero>
        </ErrorBoundary>
        {/* higher order components */}
        <ClickCounter name='Ramzi' secName='Omari'></ClickCounter>
        <HoverCounter></HoverCounter>
        {/* render props */}
          <ClickCounterTwo></ClickCounterTwo>
          <HoverCounterTwo></HoverCounterTwo>
          <User render={(isLoggedIn)=> isLoggedIn? 'ramziiii': 'Guest'}></User>

        <Counter 
         render={(count, incrementCount) => (
         <ClickCounterTwo count={count} incrementCount={incrementCount} />
         )}
        ></Counter>
        <Counter 
         render={(count, incrementCount) => (
         <HoverCounterTwo count={count} incrementCount={incrementCount} />
         )}
        ></Counter>        

        	
      </div>
    );
  }
}

export default App;
