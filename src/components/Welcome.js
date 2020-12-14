import React, {Component} from 'react'

// class Welcome extends Component {
//     render(){
//         return <h1>Class Component</h1>
//     }
// }
// props 
class Welcome extends Component {
    render(){
    // if we want to destructer parameter we need to declare const {name,heroname} = this.props
    // then we'll be able to delete this.props from line 15
        return(
            <div>
                 <h1>Welcome {this.props.name} known as {this.props.heroname} </h1>
                {this.props.children}
            </div>
           
        ) 
    }
}


export default Welcome