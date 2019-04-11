import React, { Component } from 'react'
import { connect } from 'react-redux'

import { clientId } from '../apis/oAuth.js'
import { signIn, signOut } from '../actions'

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', async () => {
      window.gapi.client
      .init({
        clientId,
        scope: 'email'
      })
      .then( () => {
        this.auth = window.gapi.auth2.getAuthInstance()
        this.onAuthChange(this.auth.isSignedIn.get())
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }

  // The context of an arrow function is automatically bound to its component
  // This will update the signIn status without having to refresh
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn()
    } else {
      this.props.signOut()
    }
  }

  onSignInClick = () => {
    this.auth.signIn()
  }

  onSignOutClick = () => {
    this.auth.signOut()
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null
    } else if (this.props.isSignedIn) {
      return (
        <button
          onClick={ this.onSignOutClick }
          className="ui red google button"
        >
        <i className="google icon" />
        Sign Out
        </button>
      )
    } else {
      return (
        <button
          onClick={ this.onSignInClick }
          className="ui red google button"
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

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth)
