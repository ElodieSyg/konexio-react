import React, { useState, useEffect } from 'react';
// Axios
import Axios from 'axios';
// Component
import Menu from '../components/Menu';
//import Modal from '../components/Modal'
// npm i uuid
import { v4 as uuid } from "uuid";
// CSS
import './Battle.modules.css'

const PopularBattle = (props) => {
    const [data, setData] = useState([])
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(2)
    const [isFinish, setIsFinish] = useState(false)
    const [id, setId] = useState(localStorage.getItem('favorites') || [])


    let API_KEY = '431d1d399f92c96d37b93376cf673640'

    console.log(data)


    useEffect(() => { 
        const fetchData = async () => {
            const res = await Axios.get(
                `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`,
            ); 
            setData(res.data.results);
        };
        fetchData();
    }, [API_KEY]);
    
    const handleClick = (idMovie) => {
        let stateCopy = [...id, idMovie.toString()]

        localStorage.setItem('favorites', stateCopy)

        setCounter1(prevCounter => prevCounter + 2)
        setCounter2(prevCounter => prevCounter + 2)
        console.log(counter1)
        console.log(counter2)
        console.log("you click")

        if (counter1 > data.length - 3 || counter2 > data.length - 3) {
            setCounter1(0)
            setCounter2(2) 
        };

        if (counter2 === 18) {
            setIsFinish(!isFinish)
        };
    };

    if (isFinish === true) {
        return (
            <div>
                <Menu />
                <h3 className='container mt-5'>Vous avez parcouru tous les films !</h3>
            </div>
        );
    } else {
        return (
            <div>
                <Menu />
                    <div className='container d-flex align-items-center' >
                        {data.slice(counter1, counter2).map((movie) => (
                        <div className='border movie-width' key={uuid()} onClick={() => handleClick(movie.id)}>
                            <div className='d-flex flex-column align-items-center mb-3'>
                                <img
                                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                                alt="poster"
                                style={{ width: "150px" }}
                                className='d-flex flex-column bd-highlight mb-3'
                                />
                                {localStorage.getItem('favorite')}
                                <p className='fw-bold mt-3 d-flex flex-column bd-highlight mb-3'>{movie.title}</p>
                            </div>
                            <div>
                                <h5>Release date :</h5>
                                <p className='fw-light'>{movie.release_date}</p>
                                <h5>Overwiew :</h5>
                                <p className='fw-light'>{movie.overview}</p>
                            </div>
                        </div>
                        ))}
                </div>
            </div>
    );
    };
};

export default PopularBattle;