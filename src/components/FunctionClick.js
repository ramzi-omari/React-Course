import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log("functional component click handler")
    }

    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick
