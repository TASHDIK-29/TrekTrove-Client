import { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";


import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import "swiper/css/bundle";
import { EffectCoverflow, Autoplay } from 'swiper/modules';

import slider1 from '../../assets/footerPic1-1.jpg'
import slider2 from '../../assets/footerPic2-1.jpg'
import slider3 from '../../assets/footerPic3-1.jpg'
import slider4 from '../../assets/footerPic4-1.jpg'
import slider5 from '../../assets/footerPic5-1.jpg'

import './swiper.css'
import toast from "react-hot-toast";

const Login = () => {

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    const { loginUser, googleLogin, githubLogin } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const page = location?.state || '/';
    const handelLogin = e => {
        e.preventDefault();

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate(page);

                toast.success('Login Successful')
            })
            .catch(err => {
                console.log(err);
                
                toast.error('auth/invalid-credential');
            })
    }

    const handelGoogle = () => {
        googleLogin()
            .then(result => {
                navigate(page);
                toast.success('Login Successful')
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handelGitHub = () => {
        githubLogin()
            .then(result => {
                navigate(page);
            })
            .catch(err => {
                console.log(err);
                toast.success('Login Successful')
            })
    }


    return (
        <div className=" min-h-screen">

            <div className="flex flex-col lg:flex-row-reverse gap-10 p-6">
                <div className="text-center lg:w-1/2">
                    <Swiper
                        effect={'coverflow'}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        modules={[EffectCoverflow, Autoplay]}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                        }}
                        className="swiper"
                    >
                        <SwiperSlide className="swiper-slide">
                            <img src={slider1} />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={slider2} />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={slider3} />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={slider4} />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={slider5} />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="card shrink-0 lg:w-2/5 p-3 border border-rose-400 rounded-md  bg-base-100">
                    <div className="text-center mb-8">
                        <h1 className="text-5xl font-bold text-rose-600">Login Now!</h1>

                    </div>
                    <hr />
                    <form onSubmit={handelLogin} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-pink-800 hover:bg-pink-800 text-white font-bold">Login</button>
                        </div>
                    </form>
                    <div className="md:flex justify-between">
                        <button onClick={handelGoogle} className="border border-blue-500 rounded-lg py-1 px-1 flex gap-4 items-center justify-center md:w-2/5 mx-auto text-bs font-bold text-blue-600 mb-3"><FaGoogle className="text-blue-600" />Sign in With Google</button>
                        <button onClick={handelGitHub} className="border border-gray-500 rounded-lg py-1 px-1 flex gap-4 items-center justify-center md:w-2/5 mx-auto text-bs font-bold text-gray-600 mb-3"><FaGithub className="text-gray-600" />Sign in With Github</button>
                    </div>

                    <p className="text-center mb-2">Have no account? please <Link to='/register' className="text-rose-600 font-bold text-lg text-center">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;