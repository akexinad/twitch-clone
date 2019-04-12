import React from 'react'
import { Field, reduxForm } from 'redux-form'
//  Field is a react component, and reduxForm is a function

class StreamCreate extends React.Component {
  renderInput({ input, label }) {
    // return (
    //   <input
    //     onChange={ formProps.input.onChange }
    //     value={ formProps.input.value }
    //   />
    // )
    // SHORTENED SYNTAX
    return (
      <div className="field">
        <label>{ label }</label>
        <input { ...input }/>
      </div>
    )
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <form
        onSubmit={ this.props.handleSubmit(this.onSubmit) }
        className="ui form"
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
    )
  }
}



export default reduxForm({
  form: 'streamCreate'
})(StreamCreate)
