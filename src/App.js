import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovieForm from './AddMovieForm';
import { Container } from 'react-bootstrap';
import './styles.css';
const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'John Wick',
      description: 'A retired hitman seeks vengeance for the killing of his dog.',
      posterURL: 'https://lionsgate.brightspotcdn.com/59/e8/576c91ae47e4aa7fd6240dc48674/john-wick-chapter-1-movies-poster-01.jpg',
      rating: 5,
    },
    {
      title: 'Men in Black (MIB)',
      description: 'Secret agents monitor extraterrestrial activity on Earth.',
      posterURL: 'https://www.ecranlarge.com/uploads/image/001/123/8zvanyvcnj1fu1bsfjt5hwohfyp-491.jpg',
      rating: 4,
    },
    {
      title: 'Battlefield Earth',
      description: 'Humanity fights against an alien occupation on post-apocalyptic Earth.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BNWQ3ZWNkMzItOTcxNi00MzA5LTkzMTQtZWIyZWJjN2VhNDBkXkEyXkFqcGdeQXVyMjQwMjk0NjI@._V1_.jpg',
      rating: 1,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');
  const [desiredRating, setDesiredRating] = useState('');

  const handleTitleChange = (value) => {
    setTitleFilter(value);
  };

  const handleRateChange = (value) => {
    setRatingFilter(value);
    setDesiredRating(value.toString());
  };

  const handleAddMovie = (newMovie) => {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
    (desiredRating === '' || movie.rating.toString() === desiredRating)
  );

  return (
    <div className="app">
      <Container>
        <h1 className="text-center">My Movie App</h1>
        <AddMovieForm onAddMovie={handleAddMovie} />
        <Filter
          title={titleFilter}
          rate={ratingFilter}
          onTitleChange={handleTitleChange}
          onRateChange={handleRateChange}
        />
        <MovieList movies={filteredMovies} />
      </Container>
    </div>
  );
};

export default App;
