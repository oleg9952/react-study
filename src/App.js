import React, { Component } from 'react'
import './App.css'
import Card from './Components/Card';

export class App extends Component {
  render() {
    return (
      <div>
        <Card 
          apiLink={'https://api.github.com/users'}
          amount={5}
          render={({ loading, error, users }) => (
            <div className="card">
              <h1>Card1</h1>
              <hr/>
              { 
                error ? 'Error loading...' : 
                loading ? 'Loading...' :
                users.map(user => (
                  <li key={user.id}>{user.login}</li>
                ))
              }
            </div>
          )}
        />
        <Card 
          apiLink={'https://api.github.com/users'}
          render={({ loading, error, users }) => (
            <div className="card">
              {
                loading ? 'Loading data...' :
                error ? 'An arror occured while loading data!' :
                users.map(user => (
                  <div key={user.id}>{user.login}</div>
                ))
              }
            </div>
          )}
        />
      </div>
    )
  }
}

export default App