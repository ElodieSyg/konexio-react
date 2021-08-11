import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../components/ComponentProvider';
// Components
import Navbar from '../components/Navbar';
// CSS
import './Login.modules.css';

function Login() {
    const logState = useContext(UserContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const onSubmit = (data, e) => {
        console.log(data, e.target.value);
    };

    const handleClickSubmit = () => {
        logState.setState(!logState.state)
    }

    return (
        <div>
            <Navbar/>
                <div className='container'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register('username', { required: true, pattern: /^.{1,15}$/ })} placeholder='username'
                        className='column input mt-5 input-bck input-heigth'/>

                        <input type='password' {...register('password', { required: true, pattern: /^.{6,}$/ })} placeholder='password' 
                        className='column input mt-3 input-bck input-heigth'/>

                        {errors.username && <span className='white-text'>Usename can have maximum 15 characters.</span>}
                        {errors.password && <span className='white-text'>Password need to be more than 6 characters.</span>}
    
                        {(logState.state) 
                        ? <button type='password' className='column input mt-3 btn-submit input-heigth' onClick={handleClickSubmit}>SE DECONNECTER</button>
                        : <button type='password' className='column input mt-3 btn-submit input-heigth' onClick={handleClickSubmit}>SE CONNECTER</button>
                        };
                        
                    </form>
                </div>
        </div>
    );
    };

export default Login;