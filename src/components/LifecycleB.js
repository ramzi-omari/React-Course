import React, { Component } from 'react'

export class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Ramzi'
        }
        console.log('LifecycleB constructor')
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleB getDerivedStateFRomProps')

        return null
    }

    componentDidMount(){
        console.log('Lifecycle B componentDidMount')
    }
    shouldComponentUpdate() {
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate')

    }
    render() {
        console.log('lifeCycleB render')
        return (
            <div>
                Lifecycle B
            </div>
        )
    }
}

export default LifecycleB
