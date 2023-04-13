import React, { useState, useEffect } from 'react';
import requests from "./requests";
import axios from './axios';
import "./banner.css";

const Banner = () => {

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(requests.fetchNetflixOriginals);
      setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length - 1)]);
      return response;
    }
    fetchData();

  }, []);

  // console.log(movie);

  const truncate = (str, n) => {
    return (
      str?.length > n ? str.substr(0, n - 1) + " ..." : str
    )
  }

  return (

    <header className='banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center"
      }}
    >
      <div className="banner__contents">
        <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>
        <h2 className='banner__description'>{truncate(movie?.overview, 150)}</h2>
      </div>
      <div className="faded" />
    </header>
  );
}

export default Banner;
