import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

export class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Ramzi'
        }
        console.log('LifecycleA constructor')
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDerivedStateFRomProps')

        return null
    }

    componentDidMount(){
        console.log('Lifecycle A componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')

    }
    changeState =() => {
        this.setState({
            name : 'Codevolution'
        })
    }

    render() {
        console.log('lifeCycleA render')
        return (
            <div>
              <div>
                Lifecycle A
              </div>
              <button onClick={this.changeState}>Change state</button>
              <LifecycleB></LifecycleB>
            </div>
        )
    }
}

export default LifecycleA
