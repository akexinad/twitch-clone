import React, { Fragment } from 'react'
// You can also shorten React.Fragment to be just simply <> </>
import Modal from '../Modal.js'

const StreamDelete = () => {
  const actions = (
    <Fragment>
      <button className="ui button red">Delete</button>
      <button className="ui button">Cancel</button>
    </Fragment>
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
