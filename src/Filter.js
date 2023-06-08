import React, { useState, useEffect } from 'react';
import RatingStars from 'react-rating-stars-component';
import { Form } from 'react-bootstrap';

const Filter = ({ title, rate, onTitleChange, onRateChange }) => {
  const [ratingKey, setRatingKey] = useState(0);

  const handleTitleChange = (event) => {
    onTitleChange(event.target.value);
  };

  const handleRateChange = (value) => {
    onRateChange(value.toString());
  };

  useEffect(() => {
    setRatingKey(ratingKey + 1);
  }, [rate]);

  return (
    <Form className="filter-form">
      <Form.Group controlId="titleFilter">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" value={title} onChange={handleTitleChange} />
      </Form.Group>

      <Form.Group controlId="ratingFilter">
        <Form.Label>Rating</Form.Label>
        <RatingStars
          key={`rating-stars-${ratingKey}`} // Update the key to re-render the component
          count={5}
          value={parseInt(rate)}
          size={24}
          activeColor="#ffd700"
          onChange={handleRateChange}
        />
      </Form.Group>
    </Form>
  );
};

export default Filter;
