import { useLoaderData } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";

const DetailCard = () => {

    const spot = useLoaderData();
    console.log(spot);

    const { visitorsPerYear, travelTime, spotName, seasonality, photo, avgCost, _id, userName, description, email, location, counter } = spot;

    return (
        <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                <img src={photo} />
                <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
                    <div className="space-y-2">
                        <h1 className="inline-block text-2xl font-semibold sm:text-3xl">{spotName} ,{counter}</h1>
                        <p className="text-lg dark:text-gray-600 flex items-center gap-2"><FaMapMarkerAlt className="text-rose-600" />
                            <a rel="noopener noreferrer" href="#" className="text-lg hover:underline">{location}</a>
                        </p>
                    </div>
                    <div className="dark:text-gray-800">
                        <p>{description}</p>
                    </div>
                    <div className="flex justify-around">
                        <h3>Average Cost : {avgCost}</h3>
                        <h3>Seasonality : {seasonality}</h3>
                    </div>
                    <div className="flex justify-around">
                        <h3>Visitors : {visitorsPerYear} per year</h3>
                        <h3>Travel Time : {travelTime}</h3>
                    </div>
                    <div>
                        <h3>Added by : {userName}</h3>
                        <h3>Email : {email}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailCard;