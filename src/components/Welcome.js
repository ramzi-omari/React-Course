import React, {Component} from 'react'

// class Welcome extends Component {
//     render(){
//         return <h1>Class Component</h1>
//     }
// }
// props 
class Welcome extends Component {
    render(){
        return(
            <div>
                 <h1>Welcome {this.props.name} known as {this.props.heroname} </h1>
                {this.props.children}
            </div>
           
        ) 
    }
}


export default Welcome