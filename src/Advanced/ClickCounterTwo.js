import React, { Component } from 'react'

class ClickCounterTwo extends Component {

    render() {
        // <((( to extract count from state and include it in JSX
       // const {count} = this.state                   )))>

       const {count , incrementCount} = this.props

        return (
            <button onClick={incrementCount}> {this.props.name } Clicked {count} times</button>
        )
    }
}

export default ClickCounterTwo
