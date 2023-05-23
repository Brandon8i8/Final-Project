// /client/Form.js

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Form = (props) => {
  const [name, setName] = useState('');
  const [url, setURL] = useState('');
  const [category, setCategory] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') setName(value);
    if (name === 'url') setURL(value);
    if (name == 'category') setCategory(value);
  }

  const onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()
    props.handleSubmit({ name, url, category});
    setName('');
    setURL('');
    setCategory('');
  }

  return (
    <form onSubmit={onFormSubmit} style={{ marginBottom: '2em' }}>
      <TextField 
        id="name" 
        label="Name" 
        value={name} 
        onChange={handleChange} 
        name="name"
        variant="outlined"
        style={{ marginRight: '1em' }}
      />
      <TextField 
        id="url" 
        label="URL" 
        value={url} 
        onChange={handleChange} 
        name="url"
        variant="outlined"
        style={{ marginRight: '1em' }}
      />
      <TextField 
        id="category" 
        label="Category" 
        value={category} 
        onChange={handleChange} 
        name="category"
        variant="outlined"
        style={{ marginRight: '1em' }}
      />
      <Button variant="contained" color="primary" type="submit">
        Add Link
      </Button>
    </form>
  )
}

export default Form
