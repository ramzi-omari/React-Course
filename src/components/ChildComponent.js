import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
            {/* to pass a parameter from child to parent*/}
            <button onClick={()=>props.greetHandler('child')}>Greet Parent</button>

        </div>
    )
}

export default ChildComponent
