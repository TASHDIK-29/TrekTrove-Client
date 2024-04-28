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
            console.log('sorted', data);
            setSortedSpots(data);
          })  
    }, [])

    const spots = useLoaderData();

    console.log(spots);
    return (
        <div>
            <h1 className="text-3xl">All spots Here</h1>
            <div className="flex flex-col justify-center items-center">
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn m-1 bg-rose-400 hover:bg-rose-600">Sort By</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={handelSort}><a>Average cost</a></li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-10">
                { toggle ?
                    sortedSpots.map(spot => <SpotCard key={spot._id} spot={spot}></SpotCard>)
                    : spots.map(spot => <SpotCard key={spot._id} spot={spot}></SpotCard>)
                }
            </div>
        </div>
    );
};

export default AllSpots;