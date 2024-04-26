import { useLoaderData } from "react-router-dom";
import SpotCard from "../../components/spotCard/SpotCard";

const AllSpots = () => {

    const spots = useLoaderData();
    console.log(spots);
    return (
        <div>
            <h1 className="text-3xl">All spots Here</h1>
            <div className="grid grid-cols-3 gap-6 mt-10">
                {
                    spots.map(spot => <SpotCard key={spot._id} spot={spot}></SpotCard>)
                }
            </div>
        </div>
    );
};

export default AllSpots;