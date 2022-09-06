import React, {Component} from 'react';
import './SingleMovie.css';
import {NavLink} from 'react-router-dom';
import fetchSingleMovie from '../App/fetchSingleMovie'

class SingleMovie extends Component {

  constructor() {
    super()
    this.state = {
      movieData: {}
    }
  }

  componentDidMount = () => {
    fetchSingleMovie(this.props.movie)
    .then(data => {
      this.setState({movieData: data.movie})
    })
    .catch(err => console.log(err))
  }


  render() {
    let rating = parseFloat(this.state.movieData.average_rating)
      return (
            <div className='movie-view-container' style={{backgroundImage: `url(${this.state.movieData.backdrop_path})`}}>
              <div className='movie-view-box'>
                <div className='movie-details'>
                  <p className='text'>{this.state.movieData.title}</p>
                  <p className='text'>Average Rating: {parseFloat(rating.toFixed(2))}</p>
                  <p className='text'>Release Date: {this.state.movieData.release_date}</p>
                  <p className='text'>Runtime: {this.state.movieData.runtime} minutes</p>
                  <p className='text'>{this.state.movieData.overview}</p>
                  <NavLink className='trailer-link' to={`/movies/${this.state.movieData.id}/trailer`}> Trailer </NavLink>
                  <NavLink className='home-link' to='/'> Home </NavLink>
                </div>
                <img className='movie-poster' alt={this.state.movieData.title} src={this.state.movieData.poster_path}/>
              </div>
            </div>
          )
    }


}



export default SingleMovie
