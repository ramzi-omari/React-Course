# React course/features:
here i'll add setup command
## Sections
- [Headers](#linkheaders)

before that, there's some sections : 
1. component (functional/classe component)
2. JSX
3. Props/State
4. setState
5. Destructuring props and state

then

3. Event Handing/ Binding Event Handlers
7. Methods as props
2. Conditional Rendering / List Rendering
3. Lists and Keys 
2. Index as Key Anti-pattern
3. Styling and CSS Basics
5. Basics of form Handling
6. Component Lifecycle Methods / Component Mounting Lifecycle Methods / Component Updating Lifecycle Methods
6. Fragments 
8. Pure Component 
6. memo
3. Refs / Refs with Class Components / Forwarding Refs
5. Portals
6. Error Boundary
5. Higher Order Component 
5. Render Propos
5. Context
0. Http and React / http Get Request / Post Request
### Hooks
1. intro
2. useState Hook / useState with previous state / useState with object / useState with array
2. useEffect Hook / useEffect after render
5. Conditionally run effects 
5. Run effects only once
2. useEffect with cleanup
5. useEffect with incorrect dependency 
5. Fetching data with useEffect
3. useContext Hook
5. useReducer Hook (simple state & action)
2. useReducer Hook (complex state & action)
3. Multiple useReducers
5. useReducer with useContext
5. Fetching data with useReducer
5. useState vs useReduer
5. useCollback Hook
6. useMemo Hook
5. useRef
3. Consom Hooks
6. useDocuentTitle Custom Hooks
6. useCounter Custom Hook
5. useInput Custom Hook

## 
```javascript 
import React from 'react' 
export default nameOfTheFunction
```

## Component
- Component describe a part of the user interface 
- they are reusable and can be nested inside other components
- there's two types :
    - Stateless Functional Components (with Hooks ..)
    - Stateful class Components 

### Functional Components (rfce):
it's a JavaScript functions that input props and returns HTML(UI)

> Properties(Props) ==>   Java Script Function  ==> return HTML(JSX)

to connect the function with the application 

we should export the component with 
```javascript 
export default nameOfTheFunction
```
and then export it in the main Javascript file
```javascript 
import nameOfTheFunction from ./source
```
### Class Component (rce+tab)
it's a ES6 class who recieve Props and returns HTML(JSX
) and who can also maintain a private internal state and Complex UI logic

> Properties(Props) ==>   ES6 Class (State)  ==> return HTML(JSX)

a class component should import react AND Component first from React library
```javascript 
import React, {Component} from 'react'
```
and a render method which returns null or some HTML 
```javascript 
render(){
    returns HTML
}
export default nameOf
```
## JSX
javascript HTML(JSX) 

extention to write XML like code for elements and componenets 

JSX is not a necessity to write React but it makes code simpler and elegent

with JSX we use html syntaxe directly but without it we should code like this 
```
return React.createElement(tag ['div','h1'..] , properties[id:,class:..] ,
 the Render ['Hello Ramzi'])
EXAMPLE:
     return React.createElement('div',null,
    React.createElement('h1',{id:'idhello', className: 'dumClass'},'Hello Ramzi'))

```
### JSX differences
- class is a reserved word in JavaScript so we should use **className** for CSS properties 
- for -> htmlFor
- camelCase property naming 
    - onclick -> onClick
    - tabindex -> tabIndex
- JSX should contain one wrapped html element 
```js
<div> 
    <h1/> <p/> ...
</div>
```
## Props
is the optional input that the component can accept

allow to the component to be dynamic

props are immutable, props data is read-only they which means that data coming from the parent should not be changed by child components.  we cannot change it with props.name = "ram" in child component 

- in **Functional Component** we should add props in function's parameter
    - we are able to use data coming from parent component like this line of code
    ```javascript
    <h1>Hello {props.name} known as {props.heroname}</h1>
            {props.children}
    ```
    props.children render content between opening and closing tag of the component 
- in **class Component** it's the same with functional but we must add this before props.dataName
    - //same //same // line of code:
    ```js
    <h1>Hello {this.props.name} known as {this.props.heroname}</h1>
            {this.props.children}
    ```

## State
same as props, state hold informations that influnces the UI in the browser except that 
    - the state is managed within the component
    - variable are declared & can **change** in function body

**Step 1 Create a state object and initialize it**:
 we create a constructor class and we call in it a super() method and then we create state object with this and then initialize the object with **this** key

 **Step2 bind state value in the render function like props**:
 with {this.state.initializedVariable}

### Props vs State 
![props vs state](https://i.imgur.com/fFZA5nF.png)

## setState
>**rconst** snippet to create constructor

setState method is a asynchronous method, and it has two parameter 
- the state object
- collback function

> note1: never modify state directly, we use instead use setState

> note2: if we have to update a state based on the previous state we must pass a function as an argument instead of the regular object 

 
- we initialise variable count to 0

- we create a button and listen to the click event 'onClick' which has a function

- then we define our function which contain this.setState

> note: if we need to excute some code after the state has been changed we mustn't place it after the state method, instead we place it within the collback function

### Destructuring props and state

Destructuring is a convenient way of accessing multiple properties stored in objects and arrays... When used, destructuring does not modify an object or array but rather copies the desired items from those data structures into variables. These new **variables can be accessed** later on in a **React component**.

- in **functional component** we just need to change props into ({param1,param2}) OR declare const {param1,param2}= props
- in **class component** we declare const {param1,param2}= state

and then we delete (this.props/this.state) in the render HTML

## Event Handling
- in **functional component** we create a function and pass it inside onClick of the tag Button without calling the function clickHandlerit 'without parentheses()"
```js
    <button onClick={functionName}>Click</button>
```
- in **class component** it's the same as functional except when we pass the click handler function in onClick, we must add this keyword
```js
    <button onClick={this.FunClickHandler}>Click</button>
```
## Binding Event Handlers

> note : when we use an arrow function, the event handler is automatically bound to the component instance so we don’t need to bind it in the constructor.

1- **Binding in the render method**(TOO RISKY) no big impact in small App but it could be troublesome in large App and components that contains nested components:
```js
<button onClick={this.funcClickHandlerName.bind(this)}>click</button>
```
2- **Arrow funtions**(TOO RISKY except if the code doesn't invovle rerendering nested children componenets) :

calling event handler "funcClickHandlerName()" in arrow function body and the value will be returned that's why we add the func call '()'
```js
<button onClick={() => this.funcClickHandlerName()}>click</button>
```
3- binding the event handler in the constructor by add a line of code, and then the normal call in button
```js
this.funcClickHandlerName = this.funcClickHandlerName.bind(this)
then 
<button onClick={this.funcClickHandlername}>Click</button>

```
4- use an arrow function as a class property,, we change the way we define our method in the class
```js
 clickHandler = () =>{  
     this.setState({
        message: "BYE"
     })
   }
```

3&4 are by suggested **react documentation** but 4th is under experimentation
