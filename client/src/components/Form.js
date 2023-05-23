// /client/Form.js

import React, { useState } from 'react'

const Form = (props) => {
  const [name, setName] = useState('');
  const [url, setURL] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') setName(value);
    if (name === 'url') setURL(value);
  }

  const onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()
    console.log(name, url)
    props.handleSubmit({ name, url });
    setName('');
    setURL('');
  }

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" value={name} onChange={handleChange} />
      <label htmlFor="url">URL:</label>
      <input type="text" name="url" value={url} onChange={handleChange} />
      <button type="submit">Add Link</button>
    </form>
  )
}

export default Form
