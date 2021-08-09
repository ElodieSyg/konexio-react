import React from 'react';
// Component 
import Menu from '../components/Menu'

const Favorites = (props) => {
    return (
        <div>
            < Menu />
            <h1>{props.localStorage.getItem('favorite')}</h1>
        </div>
    )
} 

export default Favorites;