import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import login from '../../images/login/Login.jpg'

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [data, setData] = useState("");

    const handleLogin = data => {
        console.log(data)

    }
    
    return (
        <div className='' >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src={login} alt=''></img>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-4xl font-bold text-center">Login now!</h1>

                            <form onSubmit={handleSubmit(handleLogin)}>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        {...register("email", {
                                            required: 'Email Address Required'
                                        })}
                                        type="text"
                                        placeholder="Your Email"
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        {...register("password", {
                                            required: 'Password is Required',
                                            minLength: { value: 6, message: 'Password at least 6 character' }
                                        })}
                                        type="password"
                                        placeholder="Your is Password"
                                        className="input input-bordered w-full"
                                    />
                                    {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                                    <label className="label">
                                        <span className="label-text-alt">Forgate Password ?</span>
                                    </label>

                                    <input className='btn btn-accent w-full' value='Login' type="submit" />
                                    {/* <div>
                                        {
                                            loginError && <p className='text-red-500'>{loginError}</p>
                                        }
                                    </div> */}
                                </div>
                            </form>
                            <p>
                                Laptob Zone New? <Link className='text-blue-500' to='/signup'>Create An Account</Link>
                            </p>
                            <div className="divider">OR</div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline">Continue With Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;