import React, { Component } from 'react'

export class AddNote extends Component {
  
    state = {
      userInput: ''
    }

    updateState = e => this.setState({ userInput: e.target.value })

    postNote = () => {
      if(this.state.userInput == '') {
        alert('You forgot to enter your note!')
      } else {
        this.props.sendNote(this.state.userInput)
        this.setState({ userInput: '' })
      }
    }

    handleKeyPress = e => {
      if(e.key === 'Enter') {
        this.postNote()
      }
    }
  
    render() {
        return (
            <div className="addNotes">
                <div>
                  <input type="text" placeholder="Type in your note..."
                    onChange={this.updateState}
                    value={this.state.userInput}
                    onKeyPress={this.handleKeyPress}
                  />
                  <div className="addBtn" onClick={this.postNote}>
                      <span>+</span>
                  </div>
                </div>
                
            </div>
        )
    }
}

export default AddNote
