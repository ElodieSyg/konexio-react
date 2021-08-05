import React, { useState, useEffect } from 'react';
// Moment
import moment from 'moment'
// Axios 
import Axios from 'axios'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// npm i uuid
import { v4 as uuid } from "uuid";


const Weekly = () => {
    const [data, setData] = useState([])

    let API_KEY = '431d1d399f92c96d37b93376cf673640';
    let today = moment().format('YYYY-MM-DD');
    console.log(today);
    let lastWeek = moment().add(-7, 'days').format('YYYY-MM-DD');
    console.log(lastWeek)


    useEffect(() => { 
        const fetchData = async () => {
            const res = await Axios.get(
                `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${lastWeek}&primary_release_date.lte=${today}&api_key=${API_KEY}`           ); 
            console.log(res)
            setData(res.data.results);
        };
        fetchData();
    }, [lastWeek, today, API_KEY]);

    return (
        <div>
          <div className='container' key={uuid()}>
            {data.map((movie) => (
                <div className='min-width d-inline-flex p-2 bd-highlight wrap border'>
                    <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="poster" style={{ width: "150px" }} className='min-width'/>
                    <div className='ms-5'>
                        <p className='fw-bold mt-3'>{movie.title}</p>
                        <h5>Release date :</h5>
                        <p className='fw-light'>{movie.release_date}</p>
                        <h5>Overwiew :</h5>
                        <p className='fw-light'>{movie.overview}</p>
                    </div>
                </div>
            ))};
        </div>

        </div>
    )
}

export default Weekly;