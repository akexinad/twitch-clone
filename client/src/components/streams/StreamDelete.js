import React from 'react'
import Modal from '../Modal.js'

const StreamDelete = () => {
  const actions = (
    <div>
      <button className="ui button red">Delete</button>
      <button className="ui button">Cancel</button>
    </div>
  )

  return (
    <div>
      StreamDelete
      <Modal
        title="delete stream"
        content="Are you sure you want to delet this stream?"
        actions={ actions }
      />
    </div>
  )
}

export default StreamDelete
