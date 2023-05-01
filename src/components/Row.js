import React, { useEffect, useState } from 'react'
import './Row.css'
import instance from '../axios'

const Row = ({title, fetchUrl}) => {
    const [movies, setmovies] = useState([])
    const base_url = 'https://image.tmdb.org/t/p/original/';

    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(fetchUrl);
            setmovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row__posters'>
            {movies.map((movie)=>{
                return <img key={movie.id} className='row__poster' src={`${base_url}${movie.poster_path}`} alt={movie.name} />
            })}
        </div>
    </div>
  )
}

export default Row