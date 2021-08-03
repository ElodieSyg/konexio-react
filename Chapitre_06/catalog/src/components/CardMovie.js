import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
// jSon files
import moviesList from "../movies.json";
// CSS
import './CardMovies.modules.css'
// import useParams pour rechercher le parametre id de l url (hooks)
import { useParams } from "react-router-dom";

import {Button} from 'reactstrap'

const CardMovie = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        setMovie(moviesList[id - 1])
    }, [id]); 

    return (
        <div>
            <div className="d-flex justify-content-center mt-4 mb-4">
                <img src={movie.image} alt="movie card" className="width-img"></img>
            </div>

            <div className="container d-flex flex-column bd-highlight mb-3 border">
                <h5 className="p-2 bd-highlight">Title :</h5>
                <p className="p-2 bd-highlight">{movie.title}</p>
                <h5 className="p-2 bd-highlight">Director :</h5>
                <p className="p-2 bd-highlight">{movie.director}</p>
                <h5 className="p-2 bd-highlight">Stars :</h5>
                <p className="p-2 bd-highlight">{movie.stars}</p>
                <h5 className="p-2 bd-highlight">Description :</h5>
                <p className="p-2 bd-highlight">{movie.description}</p>
            </div>

            <div className="d-flex p-2 bd-highlight justify-content-center">
                <Button color='secondary'><Link to="/" className="button">Return</Link></Button> 
            </div>
        </div>
    );
};
export default CardMovie;