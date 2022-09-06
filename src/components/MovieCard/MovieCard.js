import React from 'react';
import './MovieCard.css';
import {NavLink} from 'react-router-dom'

const movieCard = ({poster_path, title, id}) => {
    return (
      <NavLink to={`movies/${id}`}>
        <div className='movie-card'>
            <img id={id} className='poster' alt={title} src={poster_path}/>
            <p className={`id-${id}`}>{title}</p>
        </div>
      </NavLink>
    )
}

export default movieCard;
