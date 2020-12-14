import React from 'react'

// function Greet (){
//     return <h1>Hello Ramzi</h1>
// }

// with ES6 syntax
//const Greet = () => <h1>Hello Ramzi</h1>

// re-use component, here we add dynamic attribute Name(props)
const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name}known as {props.heroname}</h1>
            {props.children}
        </div>
    )
}

export default Greet