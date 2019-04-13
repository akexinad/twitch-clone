import React from 'react'
import { Field, reduxForm } from 'redux-form'
//  Field is a react component, and reduxForm is a function

class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">
            { error }
          </div>
        </div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
    // return (
    //   <input
    //     onChange={ formProps.input.onChange }
    //     value={ formProps.input.value }
    //   />
    // )
    // SHORTENED SYNTAX
    const className = `field ${ meta.error && meta.touched ? 'error' : '' }`
    return (
      <div className={ className }>
        <label>{ label }</label>
        <input { ...input } autoComplete="off" />
        <div>{ this.renderError(meta) }</div>
      </div>
    )
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues)
  }

  render() {
    return (
      <div>
        <h2>Create A Stream!</h2>
        <form
          onSubmit={ this.props.handleSubmit(this.onSubmit) }
          className="ui form error"
          >
          <Field
            name="title"
            label="Title"
            component={ this.renderInput }
            />
          <Field
            name="description"
            label="Description"
            component={ this.renderInput }
            />
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    )
  }
}

const validate = (formValues) => {
  const errors = {}

  if (!formValues.title) {
    errors.title = 'You must enter a title!'
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description!'
  }

  return errors
}

export default reduxForm({
  form: 'streamForm',
  validate
})(StreamForm)
