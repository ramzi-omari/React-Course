import React, {Component} from 'react'


class Message extends Component {
    constructor(){
        super()
        this.state={
            message: 'Welcom RamRam'
        }
    }
    changeMessage(){
        this.setState({
            message:'thanks for subsribing'
        })
    }
    render(){
        return(
            <div>
                 <h1>{this.state.message}</h1>
                 <button onClick={()=> this.changeMessage()}>Subscribe</button>
            </div>
           
        ) 
    }
}


export default Message