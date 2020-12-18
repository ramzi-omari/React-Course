import React, { Component } from 'react'

 class Refs extends Component {
     constructor(props) {
         super(props)
     
         this.inputRef = React.createRef()
         // 2nd method
         this.cbRef = null
         this.setCbRef = (element) => {
            this.cbRef = element
         }
     }
    
     componentDidMount(){
        //  this.inputRef.current.focus()
        //  console.log(this.inputRef)
        // 2ed method
        if (this.cbRef) {
            this.cbRef.focus()
        }
     }
     clickHandler = ()=> {
         alert(this.inputRef.current.value)
     }
     
    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef} ></input>
                <input type='text' ref={this.setCbRef} ></input>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default Refs
