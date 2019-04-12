import React from 'react'
import { connect } from 'react-redux'

const StreamEdit = (props) => {
  console.log(props);
  return (
    <div>
      StreamEdit
    </div>
  )
}

const mapsStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(
  mapsStateToProps
)(StreamEdit)
