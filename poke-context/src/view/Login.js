import { useContext, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../components/LogContext';
// Components
import Navbar from '../components/Navbar';
// CSS
import './Login.modules.css';

function Login() {
    const [username, setUsername] = useState(''); // localStorage.getItem('username')
    const [password, setPassword] = useState(''); // localStorage.getItem('password')
    const [defaultCheck, setDefaultCheck] = useState(false)
    console.log(defaultCheck)

    useEffect((e) => {
        console.log(localStorage)
    }, [username, password])

    const logState = useContext(UserContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const onSubmit = (e) => {
          if (defaultCheck) {
            console.log('check true')
            setUsername(localStorage.setItem('username', e.username))
            setPassword(localStorage.setItem('password', e.password))
        } else {
            return
        };
          console.log(e);
    };

    const chechBoxChange = (e) => {
        setDefaultCheck(true)
        console.log(e.target.checked)
    };

    const handleClickSubmit = () => {
        if (errors.password || errors.username) {
            return 
        } else {
            logState.setState(!logState.state)
        };
    };

    return (
        <div>
            <Navbar/>
                <div className='container'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register('username', { required: true, pattern: /^.{1,15}$/ })} placeholder='username'
                        className='column input mt-5 input-bck input-heigth'
                        onChange={(e) => setUsername(localStorage.setItem('username', e.target.value))}/>
                        {errors.username && <p className='white-text'>Usename can have maximum 15 characters.</p>}

                        <input type='password' {...register('password', { required: true, pattern: /^.{6,}$/ })} placeholder='password' 
                        className='column input mt-3 input-bck input-heigth'
                        onChange={(e) => setPassword(localStorage.setItem('password', e.target.value))} />
                        {errors.password && <p className='white-text'>Password need to be more than 6 characters.</p>}

                        <input type='checkbox' id='save' name='save' onChange={chechBoxChange}/>
                        <label for='save' className='white-text mt-2 ms-2' onChange={onSubmit}>Remember me</label>                    
    
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