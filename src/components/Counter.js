import React, { Component } from 'react'

 class Counter extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              count: 0
         }
     }
     increment(){
        //  first scenario +1
        //  this.setState( // first parameter = state object
        //      {
        //     count: this.state.count + 1
        //  }, // second parameter collback function
        //  () => {
        //      console.log('Callback value', this.state.count)
        //  }
        //  )  
        // second scenario +5 we need to pass a function instead of an object as a first parameter
        this.setState((prevState)=> ({
            count: prevState.count +1 
        }))
     }

     incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
     
    render() {
        return (
            <div>
                <div>
                    count - {this.state.count}
                </div>
                {/* <button onClick={()=> this.increment()}>Increment</button> */}
                <button onClick={()=> this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
