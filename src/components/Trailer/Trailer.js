import React, { Component } from 'react';
import './Trailer.css';
import fetchTrailer from '../App/fetchTrailer';
import {NavLink} from 'react-router-dom';

class Trailer extends Component {
    constructor() {
        super()
        this.state = {
            url:''
        }
    }

    componentDidMount = () => {
        fetchTrailer(this.props.id)
        .then(data => {
            let trailer = data.videos.find((video) => video.type === 'Trailer')
            this.setState({
                url: `https://www.youtube.com/embed/${trailer.key}`
            })
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div className='video-box'>
                <iframe className='trailer' width="1750" height="1000"
                    src={this.state.url}>
                </iframe>
                <NavLink className='home-link' to='/'> Home </NavLink>
            </div>
        )
    }

}

export default Trailer;
