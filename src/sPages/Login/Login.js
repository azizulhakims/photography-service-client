import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    const [error, setError] = useState('');
    const { login, ProviderLogin, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    useTitle('Login')
    const from = location.state?.from?.pathname || '/';

    const handelSubmitLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true })


            })
            .then(error => console.log(error), setError(error.message));







    }
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        ProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                console.log(handleGoogleLogin)
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))



    }



    return (
        <div className="hero bg-orange-300 rounded p-10">

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-10">
                <h1 className="text-5xl font-bold text-center">Login</h1>
                <form onSubmit={handelSubmitLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="text" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" value="Login" className="btn btn-primary" />
                    </div>
                </form>
                <p>Are you New Here Please <Link className='btn' to={'/register'} > SignUp</Link> </p>
                <br></br>
                <p className=''>You can also Login By Google <button onClick={handleGoogleLogin}><FaGoogle></FaGoogle></button> </p>
            </div>
        </div >

    );
};

export default Login;