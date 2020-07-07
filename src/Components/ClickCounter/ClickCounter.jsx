import React, { Component } from 'react'
import styles from './styles.module.scss'
import withCount from '../withCount'

export class ClickCounter extends Component {
    render() {
        return (
            <div className={styles.clickCounter}
                onClick={this.props.increment}
            >
                <p>Click count: { this.props.counter }</p>
            </div>
        )
    }
}

export default withCount(ClickCounter)
