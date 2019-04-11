import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const PageOne = () => {
  return (
    <div>
      <h1>PagOne</h1>
      <Link to="/pagetwo">Navigate to page 2</Link>
    </div>
  )
}

const PageTwo = () => {
  return (
    <div>
      <h1>PageTwo</h1>
      <button>Click Me!</button>
      <Link to="/">Navigate to page 1</Link>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={ PageOne } />
          <Route path="/pagetwo" component={ PageTwo } />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
