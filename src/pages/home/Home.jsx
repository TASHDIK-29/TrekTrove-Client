
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import TouristSpots from "../../components/touristSpot/TouristSpots";
import { useLoaderData } from "react-router-dom";
import Countries from "../../components/country/Countries";
import TourGuide from "../../components/guide/TourGuide";
import Review from "../../components/review/Review";

const Home = () => {

    const spots = useLoaderData();

    const [countries, setCountries] = useState([]);
    // console.log(countries);

    useEffect( () => {
        fetch('http://localhost:5000/country')
        .then(res => res.json())
        .then(data => {
            setCountries(data);
        })
    }, [])

    
    return (
        <div>
            <Header></Header>
            <TouristSpots spots={spots}></TouristSpots>
            <Countries countries={countries}></Countries>
            <TourGuide></TourGuide>
            <Review></Review>
        </div>
    );
};

export default Home;