import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/Authprovider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import './Login.css'



const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [disabled, setDisabled] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handlelogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const captcha = form.captcha.value;
        console.log(email, password, captcha);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'Logged in successfully.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate(from, { replace: true });
            })
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }

    return (
        <div className='bg-login px-14'>
            <Helmet>
                <title>Login - Sportopia Summer Camp</title>
            </Helmet>
            <div className='grid md:grid-cols-2 gap-5 items-center md:w-10/12 md:mx-auto mx-5 p-14'>
                <div>
                    <h1 className='text-5xl font-semibold text-green-700 pb-4 text-center'>Welcome Back!</h1>
                    <img src="https://media.tenor.com/p0G_bmA2vSYAAAAd/login.gif" alt="" />
                </div>

                <div>
                    <h1 className='text-3xl font-bold text-center'>Login</h1>
                    <form onSubmit={handlelogin} className='grid gap-2'>
                        <div className='grid gap-2 text-lg'>
                            <label>Email</label>
                            <input className='w-full py-2 rounded-lg px-3 border-2' type="email" name="email" id="" placeholder='Type Your Email' required />
                        </div>

                        <div className='grid gap-2 text-lg'>
                            <label>Password</label>
                            <input className='w-full py-2 rounded-lg px-3 border-2' type="password" name="password" id="" placeholder='Type Your Password' required />
                        </div>

                        <div className='grid gap-2 text-lg py-2 w-full'>
                            <LoadCanvasTemplate />
                        </div>

                        <div className='grid gap-2 text-lg relative'>
                            <input onBlur={handleValidateCaptcha} className='w-full py-2 rounded-lg border-2 px-3' type="text" name="captcha" id="" placeholder='Type Captcha' required />
                        </div>


                        <div>
                            <input disabled={disabled} type="submit" value="Login" className='w-full py-2 bg-green-700 hover:opacity-80 rounded font-bold text-white' style={{ transition: '.5s' }} />
                        </div>

                        <p className='text-green-700 text-center'>New Here? <Link to='/signup' className='hover:underline'>Create an Account</Link></p>
                        <div className="divider">OR</div>

                        <SocialLogin></SocialLogin>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;