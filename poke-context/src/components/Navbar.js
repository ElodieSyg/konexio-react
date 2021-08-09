import { Link } from 'react-router-dom'
// CSS
import './Navbar.modules.css'

const Navbar = () => {
    return (
        <div>
            <div className='navBar navFlex'>
                <div className='mr-5'>
                    <Link to='/' className='textDecoration mr-3 text'>Home</Link>
                    <Link to='/login' className='textDecoration mr-3 text'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;