import { useState, useEffect } from 'react';
// Components
import Navbar from '../components/Navbar';
// Axios
import Axios from 'axios';
// CSS
import './Home.modules.css'

const Home = () => {
    const [pokemon, setPokemon] = useState(null)
    const [id, setId] = useState(1)

    useEffect(() => { 
        const fetchData = async () => {
            const res = await Axios.get(
                `https://pokeapi.co/api/v2/pokemon/${id}`); 
            setPokemon(res.data);
        };
        fetchData();
    }, [id]);

    const handleClickRandomNumber = () => {
        return setId(Math.floor(Math.random() * 100) + 1)
    }

    if (!pokemon) {
        return (null) // loader 
    }
    
    return (
        <div>
            <Navbar/>
            <div>
                <button className='container-title home-input' onClick={handleClickRandomNumber}>
                G&nbsp;&nbsp;E&nbsp;&nbsp;T&nbsp;&nbsp;&nbsp;A&nbsp;&nbsp;&nbsp;P&nbsp;&nbsp;O&nbsp;&nbsp;K&nbsp;&nbsp;E&nbsp;&nbsp;M&nbsp;&nbsp;O&nbsp;&nbsp;N
                </button>
            </div>

            <div className='pokemon-info align-items-center'>
                <div className='d-flex flex-column align-items-center justify-content-center'>
                <p>Name : {pokemon.name}</p>
                <p>Height : {pokemon.height}</p>
                <p>Weight : {pokemon.weight}</p>
                <p>Types : {(pokemon.types) ? pokemon.types[0].type.name : null}</p>
                </div>
            </div>
        </div>
    );
};

export default Home;