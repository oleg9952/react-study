import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import { useDispatch } from 'react-redux'
import { fetchPosts } from './store/actions/postActions'

import Posts from './Components/Posts'
import PostPage from './Components/PostPage'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>     
          <Route path="/" exact component={Posts} />
          <Route path="/:id" exact component={PostPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App