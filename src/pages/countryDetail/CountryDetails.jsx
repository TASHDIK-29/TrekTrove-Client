import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SpotCard from "../../components/spotCard/SpotCard";

const CountryDetails = () => {

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    const [spots, setSpots] = useState([]);

    const {country} = useParams();
    console.log(country.slice(1,country.length));

    const desh = country.slice(1,country.length);

    useEffect(() => {
        fetch(`https://assignment-10-server-rho-nine.vercel.app/countries/${desh}`)
            .then(res => res.json())
            .then(data => {
                setSpots(data);
            })
    }, [])


    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-16 mb-12">Tourists Spots in <span className="text-rose-600">{country}</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                {
                    spots.map(spot => <SpotCard key={spot._id} spot={spot}></SpotCard>)
                }
            </div>
        </div>
    );
};

export default CountryDetails;