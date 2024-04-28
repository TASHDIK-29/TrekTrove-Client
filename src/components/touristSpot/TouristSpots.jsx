import SpotCard from "../spotCard/SpotCard";

const TouristSpots = ({ spots }) => {

    // console.log(spots);

    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-24 mb-4">Tourists Spots</h1>
            <p className="w-1/2 text-center mx-auto mb-10 text-lg font-normal">Discover the wonders of our curated spots! From the untamed beauty of the Sundarbans to the tranquil charm of Rangamati, each destination promises unforgettable experiences. Choose your adventure today!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    spots.slice(0,6).map(spot => <SpotCard key={spot._id} spot={spot}></SpotCard>)
                }
            </div>
        </div>
    );
};

export default TouristSpots;