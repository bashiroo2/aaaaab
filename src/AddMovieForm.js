import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddMovieForm = ({ onAddMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePosterURLChange = (e) => {
    setPosterURL(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  

    const newMovie = {
      title,
      description,
      posterURL,
      rating: parseInt(rating),
    };

    onAddMovie(newMovie);

    // Reset the form fields
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter the movie title"
          value={title}
          onChange={handleTitleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter the movie description"
          value={description}
          onChange={handleDescriptionChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="posterURL">
        <Form.Label>Poster URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter the movie poster URL"
          value={posterURL}
          onChange={handlePosterURLChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="rating">
        <Form.Label>Rating</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter the movie rating"
          min={1}
          max={5}
          value={rating}
          onChange={handleRatingChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Movie
      </Button>
    </Form>
  );
};

export default AddMovieForm;
