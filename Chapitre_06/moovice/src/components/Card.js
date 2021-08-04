import React, { useState, useEffect } from 'react';
// Axios 
import Axios from 'axios'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// npm i uuid
import { v4 as uuid } from "uuid";

const Card = () => {
    const [data, setData] = useState([])

    let API_KEY = '431d1d399f92c96d37b93376cf673640'

    useEffect(() => { 
        const fetchData = async () => {
            const res = await Axios.get(
                `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`,
            ); 
            console.log(res)
            setData(res.data.results);
        };
        fetchData();
    }, [API_KEY]);

    console.log(data)

    return (
        <div className='d-inline-flex p-2 bd-highlight wrap' key={uuid()}>
            {data.map((movie) => (
                <div className='min-width'>
                    <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="poster" style={{ width: "150px" }}/>
                    <p className='fw-bold mt-3'>{movie.title}</p>
                    <h5>Release date :</h5>
                    <p className='fw-light'>{movie.release_date}</p>
                    <h5>Overwiew :</h5>
                    <p className='fw-light'>{movie.overview}</p>
                </div>
            ))};
        </div>
    );
};

export default Card;