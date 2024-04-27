import CountryCard from "../countryCard/CountryCard";

const Countries = ({ countries }) => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-16 mb-12">Countries : We Are Available</h1>
            <div className="grid grid-cols-3 gap-6">
                {
                    countries.map(item => <CountryCard key={item.country} item={item}></CountryCard>)
                }
            </div>
        </div>
    );
};

export default Countries;