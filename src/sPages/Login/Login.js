import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { login } = useContext(AuthContext);
    const handelSubmitLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .then(error => console.log(error));

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
            </div>
        </div>

    );
};

export default Login;