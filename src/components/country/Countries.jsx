import CountryCard from "../countryCard/CountryCard";

const Countries = ({ countries }) => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-24 mb-4">Countries : We Are Available In</h1>
            <p className="w-1/2 mx-auto text-center text-lg font-normal mb-10">Across six countries, our destinations stand as beacons of pride, offering rich experiences and memories waiting to be made. Join us on an unforgettable journey!</p>
            <div className="grid grid-cols-3 gap-6">
                {
                    countries.map(item => <CountryCard key={item.country} item={item}></CountryCard>)
                }
            </div>
        </div>
    );
};

export default Countries;