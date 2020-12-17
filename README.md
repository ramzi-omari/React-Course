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

## Methods as props 

child component communicate with parent component, to do that we pass in reference to a method as props to the child component

1- we include the parent component in the render method (in the global render)

2- we include the child component's Tag in the render method (in parentComponent) with an attribute 'nameAttribute' and to this attribute we assign the Parent method we defined before that 'methodName'  ```<... nameAttribute = {this.methodName} />```
we pass a reference of the method as a prop

3-access this reference (the method) in the child component's button // so we add props as a parameter and we pass the method as props object props.nameAttribute
      
``` <button onClick={props.nameAttribute}>Greet Parent</button> ```

4- to pass a parameter when we call the parent's method from the child we use arrow function to pass a parameter from child to parent
```<button onClick={() => props.nameAttribute('child')}>Greet Parent</button>```

and then we incorporate this parameter in the parent method
```methodName(childName){....code..}```

### Conditional Rendering 
**(UserGreeting.js)** 

Conditional rendering as a term describes the ability to render different UI markup based on certain conditions. In React-speak, it is a way to render different elements or components based on a condition.

1- if/else 



2- Element variables

3- Ternary conditional operator: (the best one)

The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark ( ? ), then an expression to execute if the condition is truthy followed by a colon ( : ), and finally the expression to execute if the condition is falsy.

4- Short circuit operator (when we might render something or nothing)
        // if the expression in the left of && is false, the right one will not be evaluated  

## List Rendering 
render list of objects 
in the project 
instead of coding a complex JSX we create Person.js and then we set the reference between the two files

>**Keys keyword** help React identify which items have changed (added/removed/re-ordered). To give a unique identity to every element inside the array, a key is required.

>**Index keyword**:

1. the items in the list do not have a unique id 

2. the list is a static list and will not change

2. the list will never be reordered of filtered

## Styling with CSS

there's 4 method to add style to react component

1- **regular Stylesheet**

2- **Inline styling**:  An inline CSS is used to apply a unique style to a single HTML element. An inline CSS uses the style attribute of an HTML element.

3- **CSS Modules :**  A CSS Module is a CSS file in which all class names and animation names are scoped locally by default. The key words here are scoped locally. With CSS Modules, your CSS class names become similar to local variables in JavaScript. 

4- **CSS in Libraries**

## Basics form handling
1- add the HTML element

2- assign the component state to an element 'value' (this.state.value)

3- assign an onChange handler that updates the state

>A Controlled Component is one that takes its current value through props and notifies changes through callbacks like onChange . A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component.

**explanation:** our state property created in the constructor which is supplied as a value to an attribute in the input element (in our case 'value attribut'),, whenever there is a change the new value is set to (onChange attribut) arrow function where the value will sets (with setState),, then the render method is called again with the new value he state property

## Lifecycle Methods 

The main job of React is to figure out how to modify the DOM to match what the components want to be rendered on the screen. React does so by `mounting` (adding nodes to the DOM), 
`unmounting` (removing them from the DOM), and `updating` (making changes to nodes already in the DOM) ++ `Error Handling` (when there's an error during rendering, in a lifecycle method, in the constructor or any child component).

builted method available for class component (there'r no methods for functional component):

1- **Mounting** : constructor, static getDerivedStateFromProps, render and componentDidMount

2- **Updating** : static getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate and componentDidUpdate

3- **Unmounting** : componentWillUnmount

4- **Error Handling** : static getDerivedStateFromError and componentDidCatch


### Mounting

1- **constructor (props)**: 
* A special function that will get called whenever a new component is created.
* Initializing state / Binding the event handlers
* `things to avoid`: Do not cause side effects. Ex: HTTP requests
* only place where we can change or set state just by this.state=.. otherwise we must use setState
* super(props) is essential to call the base class constructor 

2- **static getDerivedStateFromProps(props,state)** (rarely used lifecycle method):
* when the state of the component depends on changes in props over time.
* set the state
* `things to avoid`: Do not cause side effects. Ex: HTTP requests
> static method do not have access to `this` keyword

3- **render()**: 
* the only required method
* Read props & state and return JSX
* `things to avoid`: Do not change state or interact with DOM or make ajax calls
* since JSX is used, children components lifecycle methods are also executed 

4- **componentDidMount()**: 
* Invoked immediately after a component and all its children components have been rendered to the DOM
* Cause side effects. Ex: Interact with the DOM or perform any ajax calls to load data.

>**Ordre of execution**
1-constructor 2- getDerivedStateFromProps 3- render 4- method of childs component in the same order 5- componentDidMount()

### Updating

1- **static getDerivedStateFromProps(props,state)** (rarely used lifecycle method):
* called everytime a component is re-rendered
* set the state
* `things to avoid`: Do not cause side effects. Ex: HTTP requests
> static method do not have access to `this` keyword

2- **shouldComponentUpdate(nextProps, nextState)**(rarely used):
* Dictates if the component should re-render or not
* Performance optimization
* `things to avoid`: Do not cause side effects. Ex: HTTP requests / Calling the setState method

3- **render()**: 
* the only required method
* Read props & state and return JSX
* `things to avoid`: Do not change state or interact with DOM or make ajax calls
* since JSX is used, children components lifecycle methods are also executed 

4- **getSnapshotBeforeUpdate(prevProps, prevState)** (rarely used):

* Called right before the changes from the virtual DOM are to be reflected in the DOM
* Capture some information from the DOM
* Method will either return null or return a value. Returned value will be passed as the third parameter to the next method

5- **componentDidUpdate(prefProps, prevState, snapshot)**:

* Called afetr the render is finished in the re-render cycles
* Cause side effect.  >NB: we need to compare the previous props with the new props and then decide whether to make the Ajax call or not 

### Unmounting

1- **componentWillUnmount()**:
* Method is invoked immediately before a component is unmounted and destroyed.
* performe clean up tasks like: Cancelling any network requests, remobing event handlers, cancelling any subscriptions and also invalidating timers
* `things to avoid`: Do not call setState method 

### Error Handling ('ll be completed in Error boundaries part)

1- **static getDerivedStateFromError(error)**
2- **componentDidCatch(error,info)**
>the two methods are called when there is an error either during rendering, in a lifecycle method, or in the constructor of any child

