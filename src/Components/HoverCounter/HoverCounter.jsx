import React, { Component } from 'react'
import styles from './styles.module.scss'
import withCount from '../withCount'

export class HoverCounter extends Component {
    render() {
        return (
            <div className={styles.clickCounter}
                onMouseEnter={this.props.increment}
            >
                <p>Hover count: { this.props.counter }</p>
            </div>
        )
    }
}

export default withCount(HoverCounter)
