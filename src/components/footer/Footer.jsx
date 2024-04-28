import foot1 from '../../assets/footerPic1-1.jpg'
import foot2 from '../../assets/footerPic2-1.jpg'
import foot3 from '../../assets/footerPic3-1.jpg'
import foot4 from '../../assets/footerPic4-1.jpg'
import foot5 from '../../assets/footerPic5-1.jpg'
import './footer.css'
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";



import { FaInstagramSquare, FaFacebookF, FaWhatsapp, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="relative pt-16  dark:bg-gray-100 dark:text-gray-800 footer-container mt-20">
            <div className="container grid grid-cols-2 mx-auto gap-x-5 gap-y-8 sm:grid-cols-3 md:grid-cols-6 mb-16 p-2">
                <div className="flex flex-col space-y-4 col-span-2 p-5">
                    <p className="text-base font-semibold text-white">TrekTrove: Your gateway to unforgettable adventures. Explore breathtaking landscapes, immerse in diverse cultures, and create lasting memories with us.</p>
                    <h1 className="text-2xl font-semibold text-white">FOLLOW ON US :</h1>
                    <div className="space-x-3">
                        <button className="border p-4 rounded-full bg-rose-600"><FaInstagramSquare className="text-xl text-white" /></button>
                        <button className="border p-4 rounded-full bg-rose-600"><FaFacebookF className="text-xl text-white" /></button>
                        <button className="border p-4 rounded-full bg-rose-600"><FaWhatsapp className="text-xl text-white" /></button>
                        <button className="border p-4 rounded-full bg-rose-600"><FaTwitter className="text-xl text-white" /></button>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="text-2xl font-bold text-white">Quick Link</h2>
                    <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
                        <a className="hover:text-rose-600 hover:font-bold text-lg text-white" rel="noopener noreferrer" href="#">About US</a>
                        <a className="hover:text-rose-600 hover:font-bold text-lg text-white" rel="noopener noreferrer" href="#">Tour Package</a>
                        <a className="hover:text-rose-600 hover:font-bold text-lg text-white" rel="noopener noreferrer" href="#">Destination</a>
                        <a className="hover:text-rose-600 hover:font-bold text-lg text-white" rel="noopener noreferrer" href="#">Tour Guide</a>
                        <a className="hover:text-rose-600 hover:font-bold text-lg text-white" rel="noopener noreferrer" href="#">Booking Process</a>
                        <a className="hover:text-rose-600 hover:font-bold text-lg text-white" rel="noopener noreferrer" href="#">Blog</a>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="text-2xl font-bold text-white">Tour Type</h2>
                    <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
                        <a className="hover:text-rose-600 hover:font-bold text-lg text-white" rel="noopener noreferrer" href="#">Wild & Adventure Tours</a>
                        <a className="hover:text-rose-600 hover:font-bold text-lg text-white" rel="noopener noreferrer" href="#">Group Tours</a>
                        <a className="hover:text-rose-600 hover:font-bold text-lg text-white" rel="noopener noreferrer" href="#">Seasonal Tours</a>
                        <a className="hover:text-rose-600 hover:font-bold text-lg text-white" rel="noopener noreferrer" href="#">Relaxation Tours</a>
                        <a className="hover:text-rose-600 hover:font-bold text-lg text-white" rel="noopener noreferrer" href="#">Family Friendly Tour</a>
                    </div>
                </div>
                <div className="flex flex-col space-y-4 col-span-2">
                    <h2 className="text-2xl font-bold text-center text-white">Gallery</h2>
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
            
            <div className='px-16'>
                <hr />
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-8 md:px-16 py-3'>
                <h1 className=' lg:col-span-1 text-white flex justify-center items-center gap-2 text-2xl font-bold'>Contact Us :</h1>
                <h1 className='lg:col-span-2 text-white text-xl flex items-center justify-start md:justify-center ml-2 md:ml-0 mb-2 md:mb-0 gap-2'><FaPhoneAlt className='text-rose-600' /> +1593-648-96</h1>
                <h1 className=' lg:col-span-2 text-white text-xl flex items-center justify-start md:justify-center ml-2 md:ml-0 mb-2 md:mb-0 gap-2'><MdMarkEmailUnread className='text-rose-600 text-2xl w-10' /> info@trektrove.com</h1>
                <h1 className='lg:col-span-3 text-white text-xl flex items-center justify-start md:justify-center ml-2 md:ml-0 mb-2 md:mb-0 gap-2'><FaMapMarkerAlt className='text-rose-600 text-2xl' />  2752 Willison Street Eagan, United State</h1>
            </div>
            <div className='absolute md:bottom-0 w-full h-28 md:h-16 bg-zinc-800 grid grid-cols-1 lg:grid-cols-3'>
                <h1 className='text-white text-center my-auto' >© Copyright 1986. All Rights Reserved.</h1>
                <h1 className='text-white text-center my-auto text-4xl font-semibold' >Trek<span className='text-rose-600 font-bold'>Trove</span></h1>
                <a  className='text-white text-center my-auto' href="">Terms & Condition <span className='text-rose-600'>|</span> Privacy Policy</a>
            </div>
        </footer>
    );
};

export default Footer;