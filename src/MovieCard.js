import React from 'react';
import RatingStars from 'react-rating-stars-component';
import { Card } from 'react-bootstrap';

const MovieCard = ({ movie }) => {
  const renderStars = (rating) => {
    return (
      <RatingStars
        count={5}
        value={rating}
        size={24}
        activeColor="#ffd700"
        edit={false}
      />
    );
  };

  return (
    <Card className="movie-card">
      <Card.Img variant="top" src={movie.posterURL} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        {renderStars(movie.rating)}
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
