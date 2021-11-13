import axios from 'axios';
import React, { useState, useEffect } from 'react'


export const Banner = ({ fetchURL }) => {

    const baseUrl = 'https://image.tmdb.org/t/p/w500/';
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        loadMovie();
    }, [])

    const loadMovie = async () => {
        const movieinfo = await axios.get(fetchURL);
        setMovies(movieinfo.data.results[
             Math.floor(Math.random() * movieinfo.data.results.length - 1  )
        ]);
     // Math.floor(Math.random() * movieinfo.data.results.length - 1  )   
    }

    return (
        <div className='banner'>
            <img src={`${baseUrl}${movies.backdrop_path}`} className='bannerImg' alt="" />
            <div className = 'bannerbox'>
            <h2>{movies.title}</h2>
            <p className = 'bannerPara'>{movies.overview}</p>
            </div>
        </div>
    )
}
