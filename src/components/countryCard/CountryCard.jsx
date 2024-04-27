import { Link } from "react-router-dom";

const CountryCard = ({ item }) => {

    const {country, image, description} = item;

    return (
        <Link to = {`/country/:${country}`} className="rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
            <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide text-rose-600 underline">{country}</h2>
                    <p className="dark:text-gray-800">{description}</p>
                </div>
            </div>
        </Link>
    );
};

export default CountryCard;