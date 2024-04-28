import { useState } from "react";
import img3 from '../../assets/member3-1.jpg'
import img4 from '../../assets/member1-1.jpg'
import img5 from '../../assets/member5-1.jpg'
import img7 from '../../assets/member7-1.jpg'
import 'animate.css';



import { FaSquareInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoMail } from "react-icons/io5";






const TourGuide = () => {

    const [sidebar, setSidebar] = useState(false);
    const [count, setCount] = useState(0);

    const handleMouseEnter = (newCount) => {
        setSidebar(true);
        setCount(newCount);
    };

    const handleMouseLeave = () => {
        setSidebar(false);
    };






    return (
        <div className="mt-20">
            <h1 className="text-4xl font-bold text-center mb-4">Our Tour Guide</h1>
            <p className="md:w-1/2 text-center mx-auto mb-10 text-lg font-normal">Our expert guides lead you through each destination, offering insights, safety, and memorable experiences every step of the way.</p>

            <div className="mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-6">
                <div className="relative rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800"
                    onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}
                >
                    <img src={img5} alt="" className="object-cover object-center w-full rounded-t-md h-96 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2 text-center">
                            <h2 className="text-2xl font-semibold tracking-wide">Donec lectus leo</h2>
                            <p className="text-rose-700 font-bold">Tour Guide</p>
                        </div>
                    </div>
                    {sidebar && count === 1 && <div className="absolute bottom-28 w-full h-12 flex items-center justify-around bg-gray-700/50 animate__animated animate__fadeInUp delay-0">
                        <FaFacebookSquare className="hover:text-rose-600 hover:text-3xl text-2xl text-white cursor-pointer" />
                        <FaSquareInstagram className="hover:text-rose-600 hover:text-3xl text-2xl text-white cursor-pointer" />
                        <FaTwitter className="hover:text-rose-600 hover:text-3xl text-2xl text-white cursor-pointer" />
                        <IoMail className="hover:text-rose-600 hover:text-3xl text-2xl text-white cursor-pointer" />
                        <FaLinkedin className="hover:text-rose-600 hover:text-3xl text-2xl text-white cursor-pointer" />
                        <FaYoutube className="hover:text-rose-600 hover:text-3xl text-2xl text-white cursor-pointer" />
            
                    </div>}
                </div>
                <div className="relative max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800"
                    onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}
                >
                    <img src={img7} alt="" className="object-cover object-center w-full rounded-t-md h-96 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2 text-center">
                            <h2 className="text-2xl font-semibold tracking-wide">Cristina Json</h2>
                            <p className="text-rose-700 font-bold">Tour Guide</p>
                        </div>
                    </div>
                    {sidebar && count === 2 && <div className="absolute bottom-28 w-full h-12 flex items-center justify-around bg-gray-700/50 animate__animated animate__fadeInUp delay-0">
                        <FaFacebookSquare className="hover:text-rose-600 hover:text-3xl text-2xl text-white cursor-pointer" />
                        <FaSquareInstagram className="hover:text-rose-600 hover:text-3xl text-2xl text-white cursor-pointer" />
                        <FaTwitter className="hover:text-rose-600 hover:text-3xl text-2xl text-white cursor-pointer" />
                        <IoMail className="hover:text-rose-600 hover:text-3xl text-2xl text-white cursor-pointer" />
                        <FaLinkedin className="hover:text-rose-600 hover:text-3xl text-2xl text-white cursor-pointer" />
                        <FaYoutube className="hover:text-rose-600 hover:text-3xl text-2xl text-white cursor-pointer" />

                    </div>}
                </div>
                <div className="relative max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800"
                    onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}
                >
                    <img src={img3} alt="" className="object-cover object-center w-full rounded-t-md h-96 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2 text-center">
                            <h2 className="text-2xl font-semibold tracking-wide">Zorjina Zen</h2>
                            <p className="text-rose-700 font-bold">Tour Guide</p>
                        </div>
                    </div>
                    {sidebar && count === 3 && <div className="absolute bottom-28 w-full h-12 flex items-center justify-around bg-gray-700/50  animate__animated animate__fadeInUp delay-0">
                        <FaFacebookSquare className="hover:text-rose-600 hover:text-3xl text-2xl text-white cursor-pointer" />
                        <FaSquareInstagram className="hover:text-rose-600 hover:text-3xl text-2xl text-white cursor-pointer" />
                        <FaTwitter className="hover:text-rose-600 hover:text-3xl text-2xl text-white cursor-pointer" />
                        <IoMail className="hover:text-rose-600 hover:text-3xl text-2xl text-white cursor-pointer" />
                        <FaLinkedin className="hover:text-rose-600 hover:text-3xl text-2xl text-white cursor-pointer" />
                        <FaYoutube className="hover:text-rose-600 hover:text-3xl text-2xl text-white cursor-pointer" />

                    </div>}
                </div>
                <div className="relative max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800"
                    onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={handleMouseLeave}
                >
                    <img src={img4} alt="" className="object-cover object-center w-full rounded-t-md h-96 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2 text-center">
                            <h2 className="text-2xl font-semibold tracking-wide">Robert Flips</h2>
                            <p className="text-rose-700 font-bold">Tour Guide</p>
                        </div>
                    </div>
                    {sidebar && count === 4 && <div className="absolute bottom-28 w-full h-12 flex items-center justify-around bg-gray-700/50 animate__animated animate__fadeInUp delay-0">
                        <FaFacebookSquare className="hover:text-rose-600 hover:text-3xl text-2xl text-white cursor-pointer" />
                        <FaSquareInstagram className="hover:text-rose-600 hover:text-3xl text-2xl text-white cursor-pointer" />
                        <FaTwitter className="hover:text-rose-600 hover:text-3xl text-2xl text-white cursor-pointer" />
                        <IoMail className="hover:text-rose-600 hover:text-3xl text-2xl text-white cursor-pointer" />
                        <FaLinkedin className="hover:text-rose-600 hover:text-3xl text-2xl text-white cursor-pointer" />
                        <FaYoutube className="hover:text-rose-600 hover:text-3xl text-2xl text-white cursor-pointer" />

                    </div>}
                </div>
            </div>
        </div>
    );
};

export default TourGuide;