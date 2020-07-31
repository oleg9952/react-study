import React, { Component } from 'react'
import styles from './Counter.module.scss'

export class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 1,
            error: false
        }
    }

    render() {
        const { counter, error } = this.state;

        return (
            <div data-test="component-counter" className={styles.counter}>
                <h1 data-test="counter-output">Counter: { counter }</h1>
                { error && <p data-test="decrement-error">Counter can't be below 0</p> }
                <button data-test="increment-btn" onClick={() => {
                    this.setState({ counter: counter + 1, error: false })
                }}>Increment</button>
                <button data-test="decrement-btn" onClick={() => {
                    if (!counter) {
                        this.setState({ error: true })
                        return
                    }
                    this.setState({ counter: counter - 1 })
                }}>Decrement</button>
            </div>
        )
    }
}

export default Counter