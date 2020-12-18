import React from 'react'

//const UpdatedComponent = (OriginalComponent) =>{}
const withCounter = (WrappedComponent, incrementNumber) => {
    //    class NewComponent extends React.Component {
    class withCounter extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + incrementNumber }
            })
        }

        render() {
            return (
                <WrappedComponent
                    count={this.state.count}
                    incrementCount={this.incrementCount}
                    // to pass the rest of the props to show name (passed in app.js)
                    {...this.props}
                ></WrappedComponent>
            )
        }
    }
    return withCounter
}
export default withCounter