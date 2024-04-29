import { useLoaderData } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Bounce, Fade } from "react-awesome-reveal";
import { useEffect } from "react";

const DetailCard = () => {

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    const spot = useLoaderData();
    console.log(spot);

    const { visitorsPerYear, travelTime, spotName, seasonality, photo, avgCost, _id, userName, description, email, location, counter } = spot;

    return (
        <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                <Bounce triggerOnce={true}>
                    <img className="h-64 md:h-96" src={photo} />
                </Bounce>
                <Fade cascade={true} delay={500}>
                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
                        <div className="space-y-2">
                            <h1 className="inline-block text-2xl font-semibold sm:text-3xl">{spotName} ,{counter}</h1>
                            <p className="text-lg dark:text-gray-600 flex items-center gap-2"><FaMapMarkerAlt className="text-rose-600" />
                                <a rel="noopener noreferrer" href="#" className="text-lg hover:underline">{location}</a>
                            </p>
                        </div>
                        <div className="dark:text-gray-800">
                            <p className="text-lg font-normal">{description}</p>
                        </div>
                        <div className="md:flex justify-around">
                            <h3 className="text-base font-medium">Average Cost : <span className="text-xl font-bold text-rose-600">{avgCost}</span> TK</h3>
                            <h3 className="text-base font-medium">Seasonality : <span className="text-xl font-bold text-rose-600">{seasonality}</span></h3>
                        </div>
                        <div className="md:flex justify-around">
                            <h3 className="text-base font-medium">Visitors : <span className="text-xl font-bold text-rose-600">{visitorsPerYear}</span> per year</h3>
                            <h3 className="text-base font-medium">Travel Time : <span className="text-xl font-bold text-rose-600">{travelTime}</span></h3>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Added by : <span className="text-xl font-bold text-rose-600">{userName}</span></h3>
                            <h3 className="text-lg font-semibold">Email : <span className="text-xl font-bold text-rose-600">{email}</span></h3>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default DetailCard;