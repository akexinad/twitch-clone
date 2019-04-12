import React from 'react'
import { Router, Route } from 'react-router-dom'

import history from '../history.js'
import Header from './Header.js'
import StreamCreate from './streams/StreamCreate.js'
import StreamEdit from './streams/StreamEdit.js'
import StreamDelete from './streams/StreamDelete.js'
import StreamList from './streams/StreamList.js'
import StreamShow from './streams/StreamShow.js'

const App = () => {
  return (
    <div className="ui container">
      <Router history={ history }>
        <div>
          <Header />
          <Route path="/" exact component={ StreamList }></Route>
          <Route path="/streams/new" exact component={ StreamCreate }></Route>
          <Route path="/streams/edit" exact component={ StreamEdit }></Route>
          <Route path="/streams/delete" exact component={ StreamDelete }></Route>
          <Route path="/streams/show" exact component={ StreamShow }></Route>
        </div>
      </Router>
    </div>
  )
}

export default App
