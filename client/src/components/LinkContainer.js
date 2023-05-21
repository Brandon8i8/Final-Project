import React, { useState } from 'react'
import Table from './Table';
import Form from './Form';

const LinkContainer = (props) => {
  const [favLinks,setFavLinks] = useState([]);

  const handleRemove = (index) => {
    const updatedLinks = favLinks.filter((_,i) => i !== index);
    setFavLinks(updatedLinks);
  }

  const handleSubmit = (favLink) => {
    setFavLinks([...favLinks, favLink]);
  }

  return (
    <div className="container">
      <h1>My Favorite Links</h1>
      <p>Add a new url with a name and link to the table.</p>
      <Table linkData={favLinks} removeLink={handleRemove} />

      <br />

      <h3>Add New</h3>
      <Form handleSubmit={handleSubmit} />
    </div>
  )
}

export default LinkContainer
