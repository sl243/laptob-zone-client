import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import login from '../../images/login/Login.jpg'
import useToken from '../../useToken/useToken';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { userCreate, updateUserProfile } = useContext(AuthContext);
    const [signupError, setSignupError] = useState('')
    const [userEmail, setUserEmail] = useState('');
    const [token] = useToken(userEmail)
    const navigate = useNavigate()

    if(token) {
        navigate('/')
    }

    const handleSignUp = data => {
        console.log(data)
        setSignupError('')

        userCreate(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('Your Account Created Successfully')
               

                const userInfo = {
                    displayName: data.name,
                    buyerSeller: data.buyerSeller
                }

                updateUserProfile(userInfo)
                    .then(() => {
                        userSaveDatabase(data.name, data.email, data.buyerSeller)
                       
                    })
                    .catch(error => {
                        console.error(error)
                    })
            })
            .catch(error => {
                console.error(error)
                setSignupError(error.message)
            })
    }


     // user save in database
     const userSaveDatabase = (name, email, buyerSeller) => {
        const user = {name, email, buyerSeller};
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(user) 
        })
        .then( res => res.json())
        .then( data => {
            console.log(data)
            setUserEmail(email)
        })
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
                            <h1 className="text-4xl font-bold text-center">Sign Up</h1>

                            <form onSubmit={handleSubmit(handleSignUp)}>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        {...register("name", {
                                            required: 'Name is required'
                                        })}
                                        type="name"
                                        placeholder="Your Name"
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        {...register("email", {
                                            required: 'Email is required',

                                        })}
                                        type="email"
                                        placeholder="Your Email"
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                                <div className="form-control w-full max-w-xs my-3">
                                    <select
                                        {...register("buyerSeller", {
                                            required: 'Selected Your Option'
                                        })}>
                                        <option value="buyer">Buyer</option>
                                        <option value="seller">Seller</option>
                                    </select>
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        {...register("password", {
                                            required: 'Password is required',
                                            minLength: { value: 6, message: 'Password Must be at least 6 character' },
                                            pattern: { value: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/, message: 'Password Must be Strong' }

                                        })}
                                        type="password"
                                        placeholder="Your is Password"
                                        className="input input-bordered w-full"
                                    />
                                    {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                                    <label className="label">
                                        <span className="label-text-alt">Forgate Password ?</span>
                                    </label>

                                    <input className='btn btn-accent w-full' value='Sign Up' type="submit" />
                                </div>
                                {
                                    signupError && <p className='text-red-800'>{signupError}</p>
                                }
                            </form>
                            <p>
                                Already have an account? <Link className='text-blue-500' to='/login'>Please login</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;