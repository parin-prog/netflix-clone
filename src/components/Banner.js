import React, { useEffect, useState } from 'react'
import instance from '../axios'
import requests from '../Requests'
import './Banner.css'

const Banner = () => {
    const [movie, setmovie] = useState([])
    const truncate = (string, num)=>{
        if (string.length > num) {
            return string.substr(0, num -1) + '.....'
        } else {
            return string
        }
    }
    useEffect(() => {
        const fetchData = async()=>{
            const request = await instance.get(requests.fetchPopular);
            console.log(request)
            setmovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
            return request
        }
        fetchData();
    }
    , [])
    console.log(movie)
  return (
    <header className='banner' style={{backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie.poster_path}")`}}>
        <div className='banner__contents'>
            <h2 className='banner__title'>{movie.name}</h2>
            <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">Your List</button>
            </div>
            <h2 className='banner__description'>{movie.overview && truncate(`${movie?.overview}`, 300)}</h2>
        </div>
        <div className="banner__fadebottom"></div>
    </header>
  )
}

export default Banner