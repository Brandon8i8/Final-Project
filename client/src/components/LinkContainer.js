// /client/LinkContainer.js

import { React, useState, useEffect } from 'react';
import { Typography, CircularProgress } from '@mui/material';
import Table from './Table';
import Form from './Form';

const LinkContainer = () => {
  const [links, setLinks] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchLinks = async () => {
    setLoading(true);
    try {
      const response = await fetch("/links");
      const data = await response.json();
      setLinks(data);
    } catch (error) {
      console.error(error);
      setError("Error fetching links. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const postLink = async (newLink) => {
    try {
      const response = await fetch('/links', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newLink),
      });
      const message = await response.text();
      console.log(message);
    } catch (error) {
      console.error(error);
      setError("Error adding link. Please try again later.");
    }
  };

  const deleteLink = async (id) => {
    try {
      const response = await fetch(`/links/${id}`, {
        method: 'DELETE',
      });
      const message = await response.text();
      console.log(message);
    } catch (error) {
      console.error(error);
      setError("Error deleting link. Please try again later.");
    }
  };

  useEffect(() => {
    if (!links) {
      fetchLinks();
    }
  }, []);

  const handleRemove = (index) => {
    const updatedLinks = links.filter((_, i) => i !== index);
    setLinks(updatedLinks);
    deleteLink(links[index].id);
  };

  const handleSubmit = async (favLink) => {
    // save data to postgres
    postLink(favLink);

    // pull latest data from postgres
    fetchLinks();
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography variant="subtitle1" color="error">{error}</Typography>;
  }

  return (
    <div className="container">
      <Typography variant="h2" component="div" gutterBottom>
        My Favorite Links
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Add a new URL with a name and link to the table.
      </Typography>
      <Table linkData={links} removeLink={handleRemove} />

      <Typography variant="h5" component="div" gutterBottom>
        Add New
      </Typography>
      <Form handleSubmit={handleSubmit} />
    </div>
  );
};

export default LinkContainer;

