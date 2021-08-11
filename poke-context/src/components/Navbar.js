import { useContext } from 'react';
import { Link } from 'react-router-dom'
// Context
import { UserContext } from '../components/LogContext';
import { PokemonContext } from '../components/HistoryContext';
// CSS
import './Navbar.modules.css'

const Navbar = () => {
    const logState = useContext(UserContext)
    const savePokemon = useContext(PokemonContext)

    const handleClick = () => {
        if (logState.state === true) {
            logState.setState(false)
            savePokemon.setState([])
        };
    };

    return (
        <div>
            <div className='navBar navFlex'>
                <div className='mr-5'>
                    <Link to='/' className='textDecoration mr-3 text'>Home</Link>
                    <Link to='/login' className='textDecoration mr-3 text' onClick={handleClick}>
                        {(logState.state === false) ? 'Login' : 'Logout'}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;