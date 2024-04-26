import { FaRegClock, FaPersonWalkingLuggage } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { GiDeathStar } from "react-icons/gi";
import { Link } from "react-router-dom";

const SpotCard = ({spot}) => {

    // console.log(spot);

    const {visitorsPerYear, travelTime, spotName, seasonality, photo, avgCost, _id} = spot;
    return (
        <div className="rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
            <div className="relative">
                <img src={photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="absolute -bottom-5 left-10">
                    <button className="cursor-default relative px-5 py-2 font-medium text-white group">
                        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-rose-500 group-hover:bg-rose-700 group-hover:skew-x-12"></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-rose-700 group-hover:bg-rose-500 group-hover:-skew-x-12"></span>
                        <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-rose-600 -rotate-12"></span>
                        <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-rose-400 -rotate-12"></span>
                        <span className="relative flex items-center gap-2"><FaRegClock />{travelTime}</span>
                    </button>
                </div>
            </div>
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{spotName}</h2>
                    <div className="flex flex-col justify-around">
                        <h3 className="text-lg font-semibold flex items-center gap-2"><GiDeathStar className="text-rose-600"/>Seasonality : <span className="text-xl text-rose-600 font-bold">{seasonality}</span></h3>
                        <h3 className="text-lg font-semibold flex items-center gap-2"><FaPersonWalkingLuggage className="text-rose-600" />Visitors Per Year : <span className="text-xl text-rose-600 font-bold">{visitorsPerYear}</span></h3>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <Link to = {`/allSpots/${_id}`} className="w-1/3 flex items-center justify-center gap-2 p-3 font-bold tracking-wide rounded-md border-2 border-rose-600 hover:bg-rose-700 text-rose-600 hover:text-gray-50">Details<FaArrowRight /></Link>
                    <h1 className="text-lg font-semibold">From <br />
                        <span className="text-2xl text-rose-600 font-bold">${avgCost}</span> per person</h1>
                </div>
            </div>
        </div>
    );
};

export default SpotCard;