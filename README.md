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

### Functional Components :
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
### Class Component 
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
### JSX
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
JSX differences
- class is a reserved word in JavaScript so we should use **className** for CSS properties 
- for -> htmlFor
- camelCase property naming 
    - onclick -> onClick
    - tabindex -> tabIndex


## Event Handling
