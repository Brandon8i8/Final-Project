// /client/Form.js

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const Form = (props) => {
  const [name, setName] = useState('');
  const [url, setURL] = useState('');
  const [category, setCategory] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') setName(value);
    if (name === 'url') setURL(value);
    if (name === 'category') setCategory(value);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit({ name, url, category });
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
      <FormControl variant="outlined" style={{ marginRight: '1em' }}>
        <Select
          id="category"
          label="Category"
          value={category}
          onChange={handleChange}
          name="category"
        >
          <MenuItem value="Productivity">Productivity</MenuItem>
          <MenuItem value="Entertainment">Entertainment</MenuItem>
          <MenuItem value="Shopping">Shopping</MenuItem>
          <MenuItem value="Food">Food</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" type="submit">
        Add Link
      </Button>
    </form>
  );
};

export default Form;