import { FaStar } from "react-icons/fa6";
import img1 from '../../assets/member5-1.jpg'


import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";
import { Autoplay } from 'swiper/modules';



const Review = () => {
    return (
        <div className="">
            <div className="text-left pl-12 pt-12 mb-12">
                <h1 className="text-4xl font-bold">What Our Client Say About Us</h1>
                <p className="w-2/5 mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo necessitatibus vero repellendus nisi quos molestias pariatur ratione perspiciatis. Quia, facilis?</p>
            </div>
            <div className="w-10/12 mx-auto">
                <Swiper

                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
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
                        <div className=" rounded-xl p-6 relative bg-slate-300/25">
                            <div className="relative h-24 ">
                                <div className="absolute -top-6 left-24 w-28 h-28 rounded-full ">
                                    <img className="w-full h-full rounded-full " src={img1} alt="" />
                                </div>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam assumenda odio explicabo fuga suscipit corrupti recusandae cum ea corporis eius!</p>

                            <div className="flex justify-between items-center px-3">
                                <h1 className="text-2xl font-bold text-rose-600">Adam Groff <br /> <span className="text-lg font-medium text-gray-500">Traveler</span></h1>
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
                        <div className=" rounded-xl p-6 relative  bg-slate-300/25">
                            <div className="relative h-24">
                                <div className="absolute -top-6 left-24 w-28 h-28 rounded-full">
                                    <img className="w-full h-full rounded-full" src={img1} alt="" />
                                </div>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam assumenda odio explicabo fuga suscipit corrupti recusandae cum ea corporis eius!</p>

                            <div className="flex justify-between items-center px-3">
                                <h1 className="text-2xl font-bold text-rose-600">Adam Groff <br /> <span className="text-lg font-medium text-gray-500">Traveler</span></h1>
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
                        <div className=" rounded-xl p-6 relative  bg-slate-300/25">
                            <div className="relative h-24">
                                <div className="absolute -top-6 left-24 w-28 h-28 rounded-full">
                                    <img className="w-full h-full rounded-full" src={img1} alt="" />
                                </div>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam assumenda odio explicabo fuga suscipit corrupti recusandae cum ea corporis eius!</p>

                            <div className="flex justify-between items-center px-3">
                                <h1 className="text-2xl font-bold text-rose-600">Adam Groff <br /> <span className="text-lg font-medium text-gray-500">Traveler</span></h1>
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
                        <div className=" rounded-xl p-6 relative  bg-slate-300/25">
                            <div className="relative h-24">
                                <div className="absolute -top-6 left-24 w-28 h-28 rounded-full">
                                    <img className="w-full h-full rounded-full" src={img1} alt="" />
                                </div>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam assumenda odio explicabo fuga suscipit corrupti recusandae cum ea corporis eius!</p>

                            <div className="flex justify-between items-center px-3">
                                <h1 className="text-2xl font-bold text-rose-600">Adam Groff <br /> <span className="text-lg font-medium text-gray-500">Traveler</span></h1>
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