import React from 'react'
import MovieCard from '../MovieCard/MovieCard.js'
import './MoviesBox.css'

const MoviesBox = ({movies}) => {
    const singleMovieCards = movies.map(movie => {
      return (
        <MovieCard className='single-movie'
          poster_path={movie.poster_path}
          title={movie.title}
          id={movie.id}
          key={movie.id}
          />
        )
    })

    return (
      <div className='movies-box'>
        {singleMovieCards}
      </div>
    )
}

export default MoviesBox;
