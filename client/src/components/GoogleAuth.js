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
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }

  // The context of an arrow function is automatically bound to its component
  // This will update the signIn status without having to refresh
  onAuthChange = () => {
    this.setState({
      isSignedIn: this.auth.isSignedIn.get()
    })
  }

  onSignInClick = () => {
    this.auth.signIn()
  }

  onSignOutClick = () => {
    this.auth.signOut()
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>IDK</div>
    } else if (this.state.isSignedIn) {
      return (
        <button
          className="ui red google button"
          onClick={ this.onSignOutClick }
        >
          <i className="google icon" />
          Sign Out
        </button>
      )
    } else {
      return (
        <button
          className="ui red google button"
          onClick={ this.onSignInClick }
        >
          <i className="google icon" />
          Sign In with Google
        </button>
      )
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
