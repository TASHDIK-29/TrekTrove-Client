import foot1 from '../../assets/footerPic1-1.jpg'
import foot2 from '../../assets/footerPic2-1.jpg'
import foot3 from '../../assets/footerPic3-1.jpg'
import foot4 from '../../assets/footerPic4-1.jpg'
import foot5 from '../../assets/footerPic5-1.jpg'




import { FaInstagramSquare, FaFacebookF, FaWhatsapp, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="px-16 pt-16 pb-6 dark:bg-gray-100 dark:text-gray-800">
            <div className="container grid grid-cols-2 mx-auto gap-x-5 gap-y-8 sm:grid-cols-3 md:grid-cols-6">
                <div className="flex flex-col space-y-4 col-span-2 p-5">
                    <p className="text-base font-semibold text-gray-600">TrekTrove: Your gateway to unforgettable adventures. Explore breathtaking landscapes, immerse in diverse cultures, and create lasting memories with us.</p>
                    <h1 className="text-2xl font-semibold">FOLLOW ON US :</h1>
                    <div className="space-x-3">
                        <button className="border p-4 rounded-full bg-rose-600"><FaInstagramSquare className="text-xl text-white" /></button>
                        <button className="border p-4 rounded-full bg-rose-600"><FaFacebookF className="text-xl text-white" /></button>
                        <button className="border p-4 rounded-full bg-rose-600"><FaWhatsapp className="text-xl text-white" /></button>
                        <button className="border p-4 rounded-full bg-rose-600"><FaTwitter className="text-xl text-white" /></button>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="text-2xl font-bold">Quick Link</h2>
                    <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
                        <a className="hover:text-rose-600 hover:font-bold text-lg" rel="noopener noreferrer" href="#">About US</a>
                        <a className="hover:text-rose-600 hover:font-bold text-lg" rel="noopener noreferrer" href="#">Tour Package</a>
                        <a className="hover:text-rose-600 hover:font-bold text-lg" rel="noopener noreferrer" href="#">Destination</a>
                        <a className="hover:text-rose-600 hover:font-bold text-lg" rel="noopener noreferrer" href="#">Tour Guide</a>
                        <a className="hover:text-rose-600 hover:font-bold text-lg" rel="noopener noreferrer" href="#">Booking Process</a>
                        <a className="hover:text-rose-600 hover:font-bold text-lg" rel="noopener noreferrer" href="#">Blog</a>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="text-2xl font-bold">Tour Type</h2>
                    <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
                        <a className="hover:text-rose-600 hover:font-bold text-lg" rel="noopener noreferrer" href="#">Wild & Adventure Tours</a>
                        <a className="hover:text-rose-600 hover:font-bold text-lg" rel="noopener noreferrer" href="#">Group Tours</a>
                        <a className="hover:text-rose-600 hover:font-bold text-lg" rel="noopener noreferrer" href="#">Seasonal Tours</a>
                        <a className="hover:text-rose-600 hover:font-bold text-lg" rel="noopener noreferrer" href="#">Relaxation Tours</a>
                        <a className="hover:text-rose-600 hover:font-bold text-lg" rel="noopener noreferrer" href="#">Family Friendly Tour</a>
                    </div>
                </div>
                <div className="flex flex-col space-y-4 col-span-2">
                    <h2 className="text-2xl font-bold text-center">Gallery</h2>
                    <div className="grid grid-cols-3 gap-2">
                        <div className='flex items-center justify-center'>
                            <img className='w-32 h-20 rounded-lg' src={foot1} alt="" />
                        </div>
                        <div className=' flex items-center justify-center'>
                            <img className='w-32 h-20 rounded-lg ' src={foot4} alt="" />
                        </div>
                        <div className=' flex items-center justify-center'>
                            <img className='w-32 h-20 rounded-lg' src={foot5} alt="" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className=' flex items-center justify-center'>
                            <img className='w-full h-28 rounded-lg' src={foot2} alt="" />
                        </div>
                        <div className=' flex items-center justify-center'>
                            <img className='w-full h-28 rounded-lg' src={foot3} alt="" />
                        </div>
                    </div>

                </div>
            </div>
            <div className="flex items-center justify-center px-6 pt-12 text-sm">
                <span className="dark:text-gray-600">© Copyright 1986. All Rights Reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;