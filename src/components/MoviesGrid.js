import React, { useState } from 'react';
import '../styles.css';
import MovieCard from './MovieCard';

export default function MoviesGrid({ movies, watchlist, toggoleWatchList }) {
  const [searchMovies, setSearchMovies] = useState('');
  const [category, setCategory] = useState('All Category');
  const [rating, setRating] = useState('All');

  const handleSearchMovies = (e) => {
    setSearchMovies(e.target.value);
  };

  const handlecategoryChamge = (e) => {
    setCategory(e.target.value);
  };

  const handleRatingChnage = (e) => {
    setRating(e.target.value);
  };

  const matchesCategory = (movie, category) => {
    return (
      category === 'All Category' ||
      movie.category.toLowerCase() === category.toLowerCase()
    );
  };
  const matchesSearchMovies = (movie, searchMovies) => {
    return movie.title.toLowerCase().includes(searchMovies.toLowerCase());
  };

  const matchesRating = (movie, rating) => {
    switch (rating) {
      case 'All':
        return true;
      case 'Good':
        return movie.rating >= 8;
      case 'Ok':
        return movie.rating >= 5 && movie.rating < 8;
      case 'Bad':
        return movie.rating < 5;
      default:
        return false;
    }
  };
  const filteredMovies = movies.filter(
    (movie) =>
      matchesCategory(movie, category) &&
      matchesRating(movie, rating) &&
      matchesSearchMovies(movie, searchMovies),
    //movie.title.toLowerCase().includes(searchMovies.toLowerCase()),
  );

  return (
    <div>
      <input
        type='text'
        className='search-input'
        placeholder='Search movies.......'
        value={searchMovies}
        onChange={handleSearchMovies}
      />

      <div className='filter-bar'>
        <div className='filter-slot'>
          <label>Category</label>
          <select
            className='filter-dropdown'
            value={category}
            onChange={handlecategoryChamge}
          >
            <option>All Category</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Horror</option>
            <option>Fantasy</option>
          </select>
        </div>
        <div className='filter-slot'>
          <label>Rating</label>
          <select
            className='filter-dropdown'
            value={rating}
            onChange={handleRatingChnage}
          >
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>

      <div className='movies-grid'>
        {filteredMovies.map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.id}
            toggoleWatchList={toggoleWatchList}
            isWatchlist={watchlist.includes(movie.id)}
          ></MovieCard>
        ))}
      </div>
    </div>
  );
}
