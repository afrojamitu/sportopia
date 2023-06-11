import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { AuthContext } from '../../Provider/Authprovider';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import './SignUp.css'


const SignUp = () => {

    const { createUser, updateUserprofile } = useContext(AuthContext)
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggeduser = result.user;
                console.log(loggeduser);
                updateUserprofile(data.name, data.photo)
                    .then(() => {
                        const saveduser = { name: data.name, email: data.email }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveduser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        title: 'User Information Updated Successfully.',
                                        showClass: {
                                            popup: 'animate__animated animate__fadeInDown'
                                        },
                                        hideClass: {
                                            popup: 'animate__animated animate__fadeOutUp'
                                        }
                                    })
                                    
                                    navigate('/login')
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
    };
    return (
        <div className='bg-sign h-[750px] px-14 py-5'>
            <Helmet>
                <title>Sign Up - Sportopia Summer Camp</title>
            </Helmet>
            <div className='grid md:grid-cols-2 gap-5 items-center md:w-10/12 md:mx-auto mx-5 py-3'>

                <div>
                    <h1 className='text-3xl font-bold text-center'>Sign Up</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className='grid gap-2'>
                        <div className='grid gap-2 text-lg'>
                            <label>Name</label>
                            <input {...register("name")} className='w-full py-2 rounded px-3' type="text" name="name" id="" placeholder='Type Your Name' />
                        </div>

                        <div className='grid gap-2 text-lg'>
                            <label>Photo URL</label>
                            <input {...register("photo")} className='w-full py-2 rounded px-3' type="text" name="photo" id="" placeholder='Photo URL' />
                        </div>

                        <div className='grid gap-2 text-lg'>
                            <label>Email</label>
                            <input {...register("email", { required: true })} className='w-full py-2 rounded px-3' type="email" name="email" id="" placeholder='Type Your Email' />
                            {errors.email && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>

                        <div className='grid gap-2 text-lg'>
                            <label>Password</label>
                            <input {...register("password", { required: true, 
                                minLength: 8,
                                pattern: /(?=.*[A-Z])(?=.*[0-9].*[0-9])(?=.*[a-z])/
                                })} className='w-full py-2 rounded px-3' type="password" name="password" id="" placeholder='Type Your Password' />
                            {errors.password?.type === 'required' && <span className='text-red-500 text-sm'>This field is required</span>}
                            {errors.password?.type === 'minLength' && <span className='text-red-500 text-sm'>Password must have 8 character.</span>}
                            {errors.password?.type === 'pattern' && <span className='text-red-500 text-sm'>Password must have 1 uppercase, 1 lowercase and 2 number.</span>}
                            
                        </div>

                        <div className='grid gap-2 text-lg'>
                            <label>Confirm Password</label>
                            <input {...register("confirmPassword", { required: true, minLength: 8 })} className='w-full py-2 rounded px-3' type="password" name="confirmPassword" id="" placeholder='Re-Type Your Password' />
                        </div>


                        <div>
                            <input type="submit" value="Sign Up" className='w-full py-2 bg-green-700 hover:opacity-80 rounded font-bold text-white' style={{ transition: '0.5s' }} />
                        </div>

                        <p className='text-green-700 text-center'>Already Have an Account? <Link to='/login' className='hover:underline'>Login to Your Account</Link></p>
                        <div className="divider">OR</div>

                        <SocialLogin></SocialLogin>
                    </form>
                </div>

                <div>
                    <h1 className='text-5xl font-semibold text-green-700 pb-4 text-center'>Welcome To Sportopia!</h1>
                    <p className='text-center'>We have dedicated teacher with over a decade of experience in the education field. They believes in the power of personalized education, tailoring her lessons to meet the unique needs of each learner.</p>
                    <div className='flex justify-center items-center'>
                    <img className='h-[450px]' src="https://www.sfu.ca/siat/student_projects/iat339/nca5/P2_NootNoot/public_html/Gifs/homepageanimation/homePageAnimation-640px.gif" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;