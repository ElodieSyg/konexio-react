import { useState, useEffect, useContext } from 'react';
// Context
import { UserContext } from '../components/LogContext';
import { PokemonContext } from '../components/HistoryContext';
// Components
import Navbar from '../components/Navbar';
// Axios
import Axios from 'axios';
// CSS
import './Home.modules.css'

const Home = () => {
    const [pokemon, setPokemon] = useState()
    const [id, setId] = useState(1)

    const logState = useContext(UserContext)
    const savePokemon = useContext(PokemonContext)

    useEffect(() => { 
        const fetchData = async () => {
            const res = await Axios.get(
                `https://pokeapi.co/api/v2/pokemon/${id}`); 
            setPokemon(res.data);
        };
        fetchData();
    }, [id]);

    const handleClick = () => {
        setId(Math.floor(Math.random() * 100) + 1)
        savePokemon.setState(prevState => [...prevState, id])
    };

    if (!pokemon) {
        return (null) // loader 
    };

    if (!logState.state) {
        return (
            <div>
                <Navbar/>
                <p className='white-text'>Vous devez être connecté</p>
            </div>
        )
    } else {    
        return (
            <div>
                <Navbar/>
                <div>
                    <button className='container-title home-input' onClick={handleClick}>
                    G&nbsp;&nbsp;E&nbsp;&nbsp;T&nbsp;&nbsp;&nbsp;A&nbsp;&nbsp;&nbsp;P&nbsp;&nbsp;O&nbsp;&nbsp;K&nbsp;&nbsp;E&nbsp;&nbsp;M&nbsp;&nbsp;O&nbsp;&nbsp;N
                    </button>
                </div>

                <div className='pokemon-info align-items-center'>
                    <div className='d-flex flex-column align-items-center justify-content-center'>
                        <p>Name : {pokemon.name}</p>
                        <p>Height : {pokemon.height}</p>
                        <p>Weight : {pokemon.weight}</p>
                        <p>Pokemon's type: {(pokemon.types.length === 2) 
                            ? `${pokemon.types[0].type.name} and ${pokemon.types[1].type.name}`
                            : pokemon.types[0].type.name}</p>                
                    </div>
                </div>
            </div>
        );
    };
};

export default Home;