
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';
import { AuthContext } from '../../Shared/UserContext/UserContext';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser,providerLogIn } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
    if(token){
        navigate('/');
    }

    const handleSignUp = (data) => {
        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Created Successfully.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email,data.role);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }

    const saveUser = (name, email,role) =>{
        const user ={name, email,role:role};
        fetch('https://smart-phones-shop-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            setCreatedUserEmail(email);
        })
    };

    const googleSingIn =(data) => {
                setSignUPError('')

                providerLogIn(googleProvider,data.email,data.password )
                .then(result => {
                    const user = result.user;
                    console.log(user);
                    toast('User Created Successfully.')
                    const userInfo = {
                        displayName: data.name
                    }
                    updateUser(userInfo)
                        .then(() => {
                            saveUser(data.name, data.email);
                        })
                        .catch(err => console.log(err));
                })

                // .then(res => {
                //     const user = res.user;
                //     navigate('/')
                //     console.log(user);
                // })
                .catch(error => {
                    console.log(error)
                    setSignUPError(error.message)
                });
            }
    

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                        {/* buyer/seller */}
                        
                        <div className="space-y-1 text-sm mb-3 form-control w-full max-w-xs">
                        <label htmlFor="password" className="label text-blue-900 text-lg">
                            Enter Your option
                        </label>
                        <select
                            {...register("role")}
                            className="space-y-1 text-sm mb-3 lg:w-4/5  py-2 px-2 input input-bordered w-full  "
                        >
                            <option value="seller">Seller</option>
                            <option value="Buyer">Buyer</option>
                        </select>
                        {errors.email && <p>{errors.email.message}</p>}
                        </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    
                </form>
                <p>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>
                <button onClick={googleSingIn} className='flex items-center mx-auto btn btn-outline w-full '><FaGoogle className='mr-2'></FaGoogle>Google</button>

            </div>
        </div>
    );
};

export default SignUp;



