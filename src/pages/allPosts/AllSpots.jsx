import { useLoaderData } from "react-router-dom";
import SpotCard from "../../components/spotCard/SpotCard";
import { useEffect, useState } from "react";

const AllSpots = () => {

    const [sortedSpots, setSortedSpots] = useState([]);

    const [toggle, setToggle] = useState(false);

    const handelSort = () =>{
        setToggle(true);
    }

    useEffect( () =>{
          fetch('https://assignment-10-server-rho-nine.vercel.app/sort')
          .then(res => res.json())
          .then(data => {
            // console.log('sorted', data);
            setSortedSpots(data);
          })  
    }, [])

    const spots = useLoaderData();

    // console.log(spots);
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold text-center mt-6 mb-2">Our Tourist Spots</h1>
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn m-1 bg-rose-400 hover:bg-rose-600 text-white font-bold">Sort By</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={handelSort}><a>Average cost</a></li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                { toggle ?
                    sortedSpots.map(spot => <SpotCard key={spot._id} spot={spot}></SpotCard>)
                    : spots.map(spot => <SpotCard key={spot._id} spot={spot}></SpotCard>)
                }
            </div>
        </div>
    );
};

export default AllSpots;