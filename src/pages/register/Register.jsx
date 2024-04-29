import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../auth/firebase.config";


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

import './regSwiper.css'
import toast from "react-hot-toast";




const Register = () => {

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    const { createUser, logOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handelRegister = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        console.log(name, email, password, photo);

        if (!/^(?=.*[A-Z]).*$/.test(password)) {
            toast.error('Password must contain at least one Uppercase Character');
            return;
        }

        if (!/^(?=.*[a-z]).*$/.test(password)) {
            toast.error('Password must contain at least one Lowercase Character');
            return;
        }

        if (!/^.{6,}$/.test(password)) {
            toast.error('Password must contain at least six Character');
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                logOutUser();
                navigate('/login');
                toast.success('Registration Successful');

                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                })



            })
            .catch(err => {
                console.log(err);
                if(err.message === 'Firebase: Error (auth/email-already-in-use).'){
                    toast.error('This email already been used');
                }
            })
    }


    return (
        <div className=" min-h-screen mt-8">

            <div className="flex flex-col lg:flex-row-reverse gap-10">
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
                <div className="card shrink-0 lg:w-2/5 p-4 border border-rose-600 rounded-md  bg-base-100 ">
                    <div className="text-center mb-8">
                        <h1 className="text-5xl font-bold text-rose-600">Register Now!</h1>
                    </div>
                    <hr />
                    <form onSubmit={handelRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" name="photo" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-pink-800 hover:bg-pink-800 text-white font-bold">Register</button>
                        </div>
                    </form>
                    <p className="text-center mb-2">Already have an account? please <Link to='/login' className="text-rose-600 font-bold text-lg text-center">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;