import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import './App.css'

import Nav from './components/nav/nav'
import Home from './pages/home/home'
import Bots from './pages/bots/bots'

const routes = [
  { path: '/', Component: Home },
  { path: '/bots', Component: Bots }
]

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        {
          routes.map(({ path, Component }) => (
            <Route
              key={path}
              path={path}
              exact
            >
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={800}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))
        }
      </div>
    </Router>
  )
}

export default App