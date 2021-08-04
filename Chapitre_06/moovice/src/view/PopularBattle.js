import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
// Axios
import Axios from 'axios';
// Component
import Menu from '../components/Menu'
import Modal from '../components/Modal'
// npm i uuid
import { v4 as uuid } from "uuid";
// Reactstrap
import {Button} from 'reactstrap'

const PopularBattle = () => {
    const [data, setData] = useState([])
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(2)

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


    function handleClick() {
        setCounter1(prevCounter => prevCounter + 2)
        setCounter2(prevCounter => prevCounter + 2)
        console.log(counter1)
        console.log(counter2)
        console.log("you click")

        if (counter1 > data.length - 3 || counter2 > data.length - 3) {
            setCounter1(0)
            setCounter2(2) 
        };
    };

    function handleClickB() {
        setCounter1(prevCounter => prevCounter - 2)
        setCounter2(prevCounter => prevCounter - 2)
        console.log(counter1)
        console.log(counter2)
        console.log("you click")

        if (counter1 > data.length|| counter2 > data.length ) {
            setCounter1(2)
            setCounter2(4) 
        };
    };


    return (
        <div>
            < Menu />
            <div className='d-inline-flex p-2 bd-highlight wrap' key={uuid()}>
            <Button color='dark' style={{ height: "5rem" }} onClick={handleClickB}><Link className='text-decoration-none text-white'>></Link></Button>
                {data.slice(counter1, counter2).map((movie) => (
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="poster" style={{ width: "150px" }}/>
                        <p className='fw-bold mt-3'>{movie.title}</p>
                        <h5>Release date :</h5>
                        <p className='fw-light'>{movie.release_date}</p>
                        <h5>Overwiew :</h5>
                        <p className='fw-light'>{movie.overview}</p>
                    </div>
                ))}
                    <Button color='dark' style={{ height: "5rem" }} onClick={handleClick}><Link className='text-decoration-none text-white'>></Link></Button>
            </div>
        </div>
    )
                }

export default PopularBattle;