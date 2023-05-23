// /client/LinkContainer.js

import {React, useState, useEffect } from 'react'
import { Typography } from '@mui/material';
import Table from './Table';
import Form from './Form';

const LinkContainer = (props) => {
  const [links,setLinks] = useState(null);

  const fetchLinks = async () => {
    try {
      let response = await fetch("/links")
      console.log(response)
      let data = await response.json()
      setLinks(data)
      console.log(data)
    } catch(error) {
      console.log(error)
    }
  }
  const postLink = async (newLink) => {
    try {
      let response = await fetch('/links' , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newLink)
      })
      console.log(response)
      let message = await response.text()
      console.log(message)
    } catch(error) {
      console.log(error)
    }
  }
  const deleteLink = async (id) => {
    try {
      let response = await fetch(`/links/${id}`, {
        method: 'DELETE',
      })
      console.log(response)
      let message = await response.text()
      console.log(message)
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (links == null) {
      fetchLinks()
    }
  }, [])

  const handleRemove = (index) => {
    const updatedLinks = links.filter((_,i) => i !== index);
    setLinks(updatedLinks);
    deleteLink(links[index].id)
  }

  const handleSubmit = async (favLink) => {

    // save data to postgres
    postLink(favLink)

    // pull latest data from postgres
    fetchLinks()
    console.log(favLink)
  }

  return (
    <div className="container">
      <Typography variant="h2" component="div" gutterBottom>
        My Favorite Links
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Add a new url with a name and link to the table.
      </Typography>
      <Table linkData={links} removeLink={handleRemove} />

      <Typography variant="h5" component="div" gutterBottom>
        Add New
      </Typography>
      <Form handleSubmit={handleSubmit} />
    </div>
  )
}

export default LinkContainer
