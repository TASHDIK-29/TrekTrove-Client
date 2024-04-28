

// import 'animate.css';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

import './Banner.css'

const Banner = () => {



    return (
        <div className="mt-0">

            <Swiper
                className='h-[100vh]'
                navigation={true}
                pagination={{
                    clickable: true
                }}
                modules={[Navigation, Autoplay, Pagination]}
                loop={true}
                autoplay={{
                    delay: 3000,
                }}
            >
                <SwiperSlide>
                    <div className='flex flex-col px-10 py-10 justify-center items-center banner-container2 border border-red-600 h-full mt-0'>
                        <div className=' space-y-4 md:w-1/2'>
                            <h1 className='text-white font-semibold text-2xl'>Trek<span className="text-3xl text-rose-600 font-bold">Trove</span></h1>
                            <h1 className='text-white font-bold text-4xl border-l-4 pl-2 border-rose-700'>Discover, Explore, and Create Memories Together!</h1>
                            <p className='text-white font-semibold'>Welcome to our website, your ultimate travel companion! Explore a world of diverse destinations across six countries, guided by expert insights and personalized experiences. Embark on unforgettable adventures and create lasting memories with us.</p>
                            <button className='py-2 px-3 bg-rose-600 rounded-lg text-white font-bold'>Read More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col px-10 py-10 justify-center items-center banner-container3' >
                        <div className='space-y-4 md:w-1/2'>
                            <h1 className='text-white font-semibold text-2xl'>Trek<span className="text-3xl text-rose-600 font-bold">Trove</span></h1>
                            <h1 className='text-white font-bold text-4xl border-l-4 pl-2 border-rose-700'>Unveil Nature's Beauty with Every Journey.</h1>
                            <p className='text-white font-semibold'>Welcome to our website, your ultimate travel companion! Explore a world of diverse destinations across six countries, guided by expert insights and personalized experiences. Embark on unforgettable adventures and create lasting memories with us.</p>
                            <button className='py-2 px-3 bg-rose-600 rounded-lg text-white font-bold'>Read More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col px-10 py-10 justify-center items-center banner-container'>
                        <div className='space-y-4 md:w-1/2'>
                            <h1 className='text-white font-semibold text-2xl'>Trek<span className="text-3xl text-rose-600 font-bold">Trove</span></h1>
                            <h1 className='text-white font-bold text-4xl border-l-4 pl-2 border-rose-700'>Your Gateway to Unforgettable Adventures Await!</h1>
                            <p className='text-white font-semibold'>Welcome to our website, your ultimate travel companion! Explore a world of diverse destinations across six countries, guided by expert insights and personalized experiences. Embark on unforgettable adventures and create lasting memories with us.</p>
                            <button className='py-2 px-3 bg-rose-600 rounded-lg text-white font-bold'>Read More</button>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default Banner;