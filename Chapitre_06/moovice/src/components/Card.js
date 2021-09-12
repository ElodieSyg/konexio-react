import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
// Axios 
import Axios from 'axios'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// npm i uuid
import { v4 as uuid } from "uuid";
// CSS
import '../components/Card.modules.css';

const Card = () => {
    const [data, setData] = useState([])

    let API_KEY = '431d1d399f92c96d37b93376cf673640'
    let history = useHistory();

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

    const handleClick = () => {
        history.push("/details");
    };

    return (
        <div className='container' key={uuid()}>
            {data.map((movie) => (
                <div className='min-width d-inline-flex p-2 bd-highlight  border'>
                    <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="poster" style={{ width: "150px" }} className='min-width' />
                    <div className='ms-5 wrap'>
                        <p className='fw-bold mt-3'>{movie.title}</p>
                        <h5>Release date :</h5>
                        <p className='fw-light'>{movie.release_date}</p>
                        <button className="btn-style" onClick={handleClick}><Link className="text-decoration">Read more</Link></button>
                    </div>
                </div>
            ))};
        </div>
    );
};

export default Card;