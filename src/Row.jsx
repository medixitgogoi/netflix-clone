import React, { useState, useEffect } from 'react';
import axios from "./axios";
import "./row.css";

const Row = ({ title, fetchURL, isLargeRow = false, id }) => {

    const poster_base_url = "https://image.tmdb.org/t/p/original/";
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        const fetchMovies = async () => {
            const response = await axios.get(fetchURL); //any varible that is pulled from outside like "fetchURL" in this case, should be inserted in the dependency list of useEffect.
            const movieLists = response.data.results;
            setMovies(movieLists);
            return response;
        }

        fetchMovies();

    }, [fetchURL])

    return (
        <div className='row'>

            <h2 className='row__title'>{title}</h2>
            <div className="row__posters">
                {movies.map((movie) =>
                (
                    <img key={movie.id} className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${poster_base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        // src={`${poster_base_url}${movie.poster_path}`}
                        alt={movie.name}
                    />
                )
                )}
            </div>

        </div>
    );
}

export default Row
