import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'ramzii'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'ramzii'
                // here the PURE component will never be re-rended
            })
        },2000)
    }
    render() {
        console.log('***parent component render')
        return (
            <div>
                Parent Component
                <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParentComp
