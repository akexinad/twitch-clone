import React, { Component } from 'react'

import { clientId } from '../apis/oAuth.js'

class GoogleAuth extends Component {
  state = {
    isSignedIn: null
  }

  componentDidMount() {
    window.gapi.load('client:auth2', async () => {
      window.gapi.client.init({
        clientId,
        scope: 'email'
      })
      .then( () => {
        this.auth = window.gapi.auth2.getAuthInstance()
        this.setState({
          isSignedIn: this.auth.isSignedIn.get()
        })
      })
    })
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>IDK if we are signed in</div>
    } else if (this.state.isSignedIn) {
      return <div>I am signed in</div>
    } else {
      return <div>I am NOT signed in</div>
    }
  }

  render() {
    return (
      <div>
        { this.renderAuthButton() }
      </div>
    )
  }
}

export default GoogleAuth
