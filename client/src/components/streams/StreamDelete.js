import React, { Fragment } from 'react'
// You can also shorten React.Fragment to be just simply <> </>
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Modal from '../Modal.js'
import history from '../../history.js'
import { fetchStream, deleteStream } from '../../actions'

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }

  renderActions() {
    return (
      <Fragment>
        <button
          onClick={ () => this.props.deleteStream(this.props.match.params.id) }
          className="ui button red"
        >
          Delete
        </button>
        <Link
          to="/"
          className="ui button"
        >
          Cancel
        </Link>
      </Fragment>
    )
  }

  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to this stream'
    }

    return `Are you sure you want to this stream with title: ${ this.props.stream.title }`
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={ this.renderContent() }
        actions={ this.renderActions() }
        onDismiss={ () => history.push('/') }
      />
    )
  }
}

const mapsStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(
  mapsStateToProps, {
    fetchStream,
    deleteStream
  }
)(StreamDelete)
