import React from 'react'
import './Row.css'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from './axios'

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
    const [movies, setMovies] = useState([])
    const base_url = "https://image.tmdb.org/t/p/original/"
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl])
    console.log(movies)
    return (
        <div className='row'>
            <h1>{title}</h1>
            <div className='row__posters'>
                {movies.map(movie => ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                    <img className={`row__poster ${isLargeRow && "row__posterlarge"}`} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} key={movie.id} />
                ))}
            </div>
        </div>
    )
}

export default Row