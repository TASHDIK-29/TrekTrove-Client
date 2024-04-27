import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SpotCard from "../../components/spotCard/SpotCard";

const CountryDetails = () => {

    const [spots, setSpots] = useState([]);

    const {country} = useParams();
    console.log(country.slice(1,country.length));

    const desh = country.slice(1,country.length);

    useEffect(() => {
        fetch(`http://localhost:5000/countries/${desh}`)
            .then(res => res.json())
            .then(data => {
                setSpots(data);
            })
    }, [])


    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-16 mb-12">Tourists Spots in {country}</h1>
            <div className="grid grid-cols-3 gap-6 my-10">
                {
                    spots.map(spot => <SpotCard key={spot._id} spot={spot}></SpotCard>)
                }
            </div>
        </div>
    );
};

export default CountryDetails;