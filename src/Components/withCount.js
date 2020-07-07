import React, { Component } from 'react'

const withCount = (WrappedComponent) => {
    return class WithCount extends Component {
        constructor(props) {
            super(props);
            this.state = {
                counter: 0
            }
        }
    
        increment = () => {
            this.setState({ counter: this.state.counter + 1 })
        }

        render() {
            return <WrappedComponent 
                { ...this.state }
                { ...this.props }
                increment={this.increment}
            />
        }
    }
}

export default withCount