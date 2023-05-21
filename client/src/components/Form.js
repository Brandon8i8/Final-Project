import React, { useState } from 'react'

const Form = (props) => {
  const [name, setName] = useState("");
  const [URL, setURL] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') setName(value);
    if (name === 'URL') setURL(value);
  }

  const onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()
    props.handleSubmit({ name, URL });
    setName('');
    setURL('');
  }

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" value={name} onChange={handleChange} />
      <label htmlFor="URL">URL:</label>
      <input type="text" name="URL" value={URL} onChange={handleChange} />
      <button type="submit">Add Link</button>
    </form>
  )
}

export default Form
