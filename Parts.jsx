import axios from 'axios';
import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';



export const Parts = ({ fetchURL, title, isLargePart }) => {

    const baseUrl = 'https://image.tmdb.org/t/p/w500/';
    const [movies, setMovies] = useState([]);
    const [trailerURL, setTrailerURL] = useState();

    useEffect(() => {
        loadMovie();
    }, [fetchURL])

    const loadMovie = async () => {
        const movieinfo = await axios.get(fetchURL);
        setMovies(movieinfo.data.results);
    }
    const opts = {
        height : '390',
        width : '100%',
        playerVars:{
            autoplay : 1,
        }
    }
    const HandleClick = (movie) =>{
        if(trailerURL) {
            setTrailerURL('');
        }
        else{
            movieTrailer(movie?.title  || "")
            .then(url => {
               // alert(url);
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerURL(urlParams.get("v"));
           //   alert(urlParams.get("v"));
            }).catch((error) => console.log(error))
        }
    }


    return (
        <div className='path'>
            <h2 className='movieTitle'>{title}</h2>
            <div className='Part_Box'>
                {
                    movies.map((movie) => (
                            <img src={`${baseUrl}${isLargePart ? movie.poster_path : movie.backdrop_path}`}
                                className={isLargePart ? 'LargePath' : 'imgCard'}
                                // className={`imgCard ${isLargePart && "LargePath"}`}
                                onClick = {()=>HandleClick(movie)}
                                alt="..." />
                    ))
                }
            </div>
            {
                trailerURL ? <YouTube videoId ={trailerURL} opts = {opts}/> :null
            }
            
            <hr />
        </div>
    )
}
