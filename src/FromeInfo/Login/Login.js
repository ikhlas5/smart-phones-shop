
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import useToken from '../../hooks/useToken';
import { AuthContext } from '../../Shared/UserContext/UserContext';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { userSingIn,providerLogIn, } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    // const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();

    // if (token) {
    //     navigate(from, { replace: true });
    // }

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
       userSingIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    };

    const googleSingIn =() => {
                providerLogIn(googleProvider )
                .then(res => {
                    const user = res.user;
                    navigate('/')
                    // console.log(user);
                })
                .catch(error => {
                    console.error(error);
                })
            }


    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text">Forget Password?</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p>Are you New? <Link className='text-secondary' to="/signup">Create new Account</Link></p>
                <div className="divider">OR</div>
                <button onClick={googleSingIn} className='flex items-center mx-auto btn btn-outline w-full '><FaGoogle className='mr-2'></FaGoogle>Google</button>            
            </div>
        </div>
    );
};

export default Login;








// import { GoogleAuthProvider } from 'firebase/auth';
// import React, { useContext, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../Shared/UserContext/UserContext';
// import { FaGoogle } from 'react-icons/fa';
// import img from '../../assets/v-a-tao-9TqCQNs0kTg-unsplash.jpg'

// const Login = () => {

//     const {userSingIn,providerLogIn,providerGitHub} = useContext(AuthContext);
//     const [error, setError] = useState(``);

//     const navigate=useNavigate();
//     const location=useLocation();
//     const from=location.state?.from?.pathname || '/';
//     const googleProvider = new GoogleAuthProvider();
    

//     const handleLogin = event =>{
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;

//         userSingIn(email, password)
//         .then( result => {
//             const user = result.user;
//             console.log(user);
//             form.reset();
//             setError('')
//             navigate(from,{replace:true})
//         })
//         .then(error => {
//             console.log(error)
//             setError(error.message)
//         });
//     };

//     const googleSingIn =() => {
//         providerLogIn(googleProvider )
//         .then(res => {
//             const user = res.user;
//             navigate('/')
//             // console.log(user);
//         })
//         .catch(error => {
//             console.error(error);
//         })
//     }

//     return (
//         <div className="hero w-full my-20">
//         <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
//             <div className="text-center lg:text-left">
//                 <img className='w-3/4' src={img} alt="" />
//             </div>
//             <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
//                 <h1 className="text-5xl text-center font-bold">Login</h1>
//                 <form onSubmit={handleLogin} className="card-body">
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Email</span>
//                         </label>
//                         <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
//                     </div>
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Password</span>
//                         </label>
//                         <input type="text" name='password' placeholder="password" className="input input-bordered" required/>
                        
//                     </div>
//                     <div className="form-control mt-6">
//                         <input className="btn btn-primary" type="submit" value="Sign Up" />
//                     </div>
//                 </form>
//                 <p className='text-center'>Create a new Account? <Link className='text-orange-600 font-bold' to="/signup">SignUp</Link> </p>
//             <button onClick={googleSingIn} className='flex items-center mx-auto '><FaGoogle className='mr-2'></FaGoogle>Google</button>
//             </div>
//         </div>
//     </div>
//     );
// };

// export default Login;