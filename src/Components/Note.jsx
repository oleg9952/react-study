import React, { Component } from 'react'

export class Note extends Component {

    render() {
        const { id, order, message } = this.props.note;       
        return (
            <div className="note">
                <div 
                    className="delNote"
                    onClick={this.props.removeNote.bind(this, id)}
                >X</div>
                <p>{message}</p>
            </div>
        )
    }
}

export default Note
