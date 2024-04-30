import { FaStar } from "react-icons/fa6";
import img1 from '../../assets/member5-1.jpg'
import img2 from '../../assets/member1-1.jpg'
import img3 from '../../assets/member3-1.jpg'
import img4 from '../../assets/member7-1.jpg'


import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";
import { Autoplay } from 'swiper/modules';

import './review.css'

const Review = () => {
    return (
        <div className="review-container">
            <div className="text-left pl-12 pt-12 md:mb-12">
                <h1 className="text-4xl font-bold text-white">What Our Client Say About Us</h1>
                <p className="md:w-2/5 mt-3 text-white">Hey there! We'd love to hear your latest adventures. Share your story on our website and inspire others with your experiences!</p>
            </div>
            <div className="w-10/12 mx-auto">
                <Swiper

                    slidesPerView={1}
                    spaceBetween={10}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                    }}
                    className="mySwiper"

                >
                    <SwiperSlide className="">
                        <div className=" rounded-xl p-6 relative bg-slate-300/25 flex flex-col">
                            <div className="relative h-20 ">
                                <div className="absolute -top-6 left-24 w-24 h-24 rounded-full ">
                                    <img className="w-full h-full rounded-full " src={img1} alt="" />
                                </div>
                            </div>
                            <p className="text-white mb-3 flex-grow">Absolutely breathtaking! The Sundarbans tour was an adventure of a lifetime. Our guide was knowledgeable, and the boat rides added an extra thrill. Highly recommend for nature enthusiasts!</p>

                            <div className="flex justify-between items-center px-1">
                                <h1 className="text-xl font-bold text-rose-600">Adam Groff <br /> <span className="text-lg font-medium text-gray-400">Traveler</span></h1>
                                <div className="space-x-2 flex gap-2">
                                    <FaStar className="text-rose-600" />
                                    <FaStar className="text-rose-600" />
                                    <FaStar className="text-rose-600" />
                                    <FaStar className="text-rose-600" />
                                    <FaStar className="text-rose-600" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" rounded-xl p-6 relative  bg-slate-300/25 flex flex-col">
                            <div className="relative h-20">
                                <div className="absolute -top-6 left-24 w-24 h-24 rounded-full">
                                    <img className="w-full h-full rounded-full" src={img3} alt="" />
                                </div>
                            </div>
                            <p className="text-white mb-3 flex-grow">Cox's Bazar exceeded all expectations! The pristine beach, vibrant culture, and delicious seafood made for an unforgettable trip. Perfect for relaxation and exploration. Can't wait to return!</p>

                            <div className="flex justify-between items-center px-1">
                                <h1 className="text-xl font-bold text-rose-600">Adam Groff <br /> <span className="text-lg font-medium text-gray-400">Traveler</span></h1>
                                <div className="space-x-2 flex gap-2">
                                    <FaStar className="text-rose-600" />
                                    <FaStar className="text-rose-600" />
                                    <FaStar className="text-rose-600" />
                                    <FaStar className="text-rose-600" />
                                    <FaStar className="text-rose-600" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" rounded-xl p-6 relative  bg-slate-300/25 flex flex-col">
                            <div className="relative h-20">
                                <div className="absolute -top-6 left-24 w-24 h-24 rounded-full">
                                    <img className="w-full h-full rounded-full" src={img2} alt="" />
                                </div>
                            </div>
                            <p className="text-white mb-3 flex-grow">Rangamati's serene beauty stole my heart. The tranquil lakes, lush hills made for a truly peaceful escape. A must-visit for anyone seeking tranquility amidst nature's wonders.</p>

                            <div className="flex justify-between items-center px-1">
                                <h1 className="text-xl font-bold text-rose-600">Adam Groff <br /> <span className="text-lg font-medium text-gray-400">Traveler</span></h1>
                                <div className="space-x-2 flex gap-2">
                                    <FaStar className="text-rose-600" />
                                    <FaStar className="text-rose-600" />
                                    <FaStar className="text-rose-600" />
                                    <FaStar className="text-rose-600" />
                                    <FaStar className="text-rose-600" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" rounded-xl p-6 relative  bg-slate-300/25 flex flex-col">
                            <div className="relative h-20">
                                <div className="absolute -top-6 left-24 w-24 h-24 rounded-full">
                                    <img className="w-full h-full rounded-full" src={img4} alt="" />
                                </div>
                            </div>
                            <p className="text-white mb-3 flex-grow">Kuakata's sunset views were simply magical! The long beach, fresh seafood made our stay unforgettable. A hidden gem for those seeking beauty off the beaten path.</p>

                            <div className="flex justify-between items-center px-1">
                                <h1 className="text-xl font-bold text-rose-600">Adam Groff <br /> <span className="text-lg font-medium text-gray-400">Traveler</span></h1>
                                <div className="space-x-2 flex gap-2">
                                    <FaStar className="text-rose-600" />
                                    <FaStar className="text-rose-600" />
                                    <FaStar className="text-rose-600" />
                                    <FaStar className="text-rose-600" />
                                    <FaStar className="text-rose-600" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>


            </div>
        </div>
    );
};

export default Review;