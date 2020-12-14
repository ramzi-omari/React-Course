import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "hello"
        }
        // with 3ed approche 
        //this.clickHandler = this.clickHandler.bind(this)
    }
    // with 1-2-3 approche
    // clickHandler(){
    //     this.setState({
    //       message:'Bye'  
    //     })

    // }
    // 4th approche to handle click event with arrow function
    clickHandler=()=>{
        this.setState({
            message: "BYE"
        })
    }


    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}
                {/* <button onClick={() => this.clickHandler()}>click</button> */}
               
                {/* with 3ed & 4th approche */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
