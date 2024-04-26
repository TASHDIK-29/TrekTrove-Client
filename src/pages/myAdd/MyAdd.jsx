import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../auth/AuthProvider";
import SpotCard from "../../components/spotCard/SpotCard";

const MyAdd = () => {

    const {user} = useContext(AuthContext);

    const [spots, setSpots] = useState([]);
    console.log(spots);
    useEffect( () => {
        fetch(`http://localhost:5000/myAdds/${user?.email}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setSpots(data);
        })
    }, [])

    return (
        <div>
            <h1 className="text-3xl">My Add</h1>
            <div className="grid grid-cols-3 gap-6">
                {
                    spots.map(spot => <SpotCard key={spot._id} spot={spot}></SpotCard>)
                }
            </div>
        </div>
    );
};

export default MyAdd;