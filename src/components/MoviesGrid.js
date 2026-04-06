import React, { useState, useEffect } from 'react';
import '../styles.css';
import MovieCard from './MovieCard';

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState('');

  useEffect(() => {
    fetch('movies.json').then((response) =>
      response.json().then((data) => setMovies(data)),
    );
  }, []);

  const handleSearchMovies = (e) => {
    setSearchMovies(e.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchMovies.toLowerCase()),
  );
  // const filteredMovies = movies.filter((movie) =>
  //   movie.title.toLowerCase().includes(searchMovies.toLowerCase()),
  // );
  return (
    <div>
      <input
        type='text'
        className='search-input'
        placeholder='Search movies.......'
        value={searchMovies}
        onChange={handleSearchMovies}
      />
      <div className='movies-grid'>
        {filteredMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id}></MovieCard>
        ))}
      </div>
    </div>
  );
}
