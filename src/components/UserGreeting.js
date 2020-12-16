import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        // 1er method  if&else
        // if (this.state.isLoggedIn) {
        //     return <div>Welcome Ramzi</div>

        // } else {
        //     return <div>Welcome Guest</div>
        // }

        //2nd  Element variables
        // let message 
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Ramzi</div>
        // }else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>


        // 3ed ternary conditional
        return (
            this.state.isLoggedIn ?
                <div>Welcome Ramzi</div> :
                <div>Welcome Guest</div>
        )

        // 4th short circuit operator
        //return this.state.isLoggedIn && <div>Welcome Ramzi</div>
        
        
        // return (
        //     <div>
        //         <div>Welcome Ram</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
