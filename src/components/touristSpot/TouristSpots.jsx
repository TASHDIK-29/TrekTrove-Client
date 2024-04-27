import SpotCard from "../spotCard/SpotCard";

const TouristSpots = ({ spots }) => {

    // console.log(spots);

    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-16 mb-10">Tourists Spots</h1>
            <div className="grid grid-cols-3 gap-6">
                {
                    spots.slice(0,6).map(spot => <SpotCard key={spot._id} spot={spot}></SpotCard>)
                }
            </div>
        </div>
    );
};

export default TouristSpots;