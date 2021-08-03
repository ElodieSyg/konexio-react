import React, { useState, useEffect } from 'react';
// Component 
import Menu from '../components/Menu'
import Card from '../components/Card'
// Bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';

const Popular = () => {
    const [movies, setMovies] = useState([]);
    const [apiLink, setApiLink] = useState('')

    useEffect(() => {
        return () => {
            setApiLink('https://api.themoviedb.org/3//discover/movie?sort_by=popularity.desc&api_key=431d1d399f92c96d37b93376cf673640')
        }
    }, [])

    console.log(movies)
    console.log(apiLink)

    return (
        <div>
            < Menu />

            <h1>Popular</h1>
            <div className='flex-column p-2 bd-highligh justify-content-around'>
                <div className="row">
                    <div className="col"><Card /></div>
                    <div className="col"><Card /></div>
                    <div className="col"><Card /></div>
                    <div className="col"><Card /></div>
                </div>
                <div className="row">
                    <div className="col"><Card /></div>
                    <div className="col"><Card /></div>
                    <div className="col"><Card /></div>
                    <div className="col"><Card /></div>
                </div>
                <div className="row">
                    <div className="col"><Card /></div>
                    <div className="col"><Card /></div>
                    <div className="col"><Card /></div>
                    <div className="col"><Card /></div>
                </div>
                <div className="row">
                    <div className="col"><Card /></div>
                    <div className="col"><Card /></div>
                    <div className="col"><Card /></div>
                    <div className="col"><Card /></div>
                </div>
                <div className="row">
                    <div className="col"><Card /></div>
                    <div className="col"><Card /></div>
                    <div className="col"><Card /></div>
                    <div className="col"><Card /></div>
                </div>
            </div>

            <p>{apiLink}</p>
        </div>
    );
};

export default Popular;