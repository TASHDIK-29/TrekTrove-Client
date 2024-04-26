import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../auth/AuthProvider";
import { MdOutlineTipsAndUpdates, MdOutlineDeleteForever } from "react-icons/md";

const MyAdd = () => {

    const { user } = useContext(AuthContext);
    console.log(user);

    const [spots, setSpots] = useState([]);
    console.log(spots);

    useEffect(() => {
        fetch(`http://localhost:5000/myAdds/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSpots(data);
            })
    }, [])


    const handelDelete = id => {
        fetch(`http://localhost:5000/spots/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    const remaining = spots.filter(spot => spot._id !== id);
                    setSpots(remaining);

                    alert('Deleted');
                }
            })

    }

    return (
        <div>
            <h1 className="text-3xl">My Add</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th className="text-lg font-semibold">Spot Name</th>
                            <th className="text-lg font-semibold">Country</th>
                            <th className="text-lg font-semibold">Average Cost</th>
                            <th className="text-lg font-semibold">visitors Per Year</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            spots.map((spot, idx) => <tr key={idx}>
                                <th>{idx + 1}</th>
                                <td>{spot.spotName}</td>
                                <td>{spot.counter}</td>
                                <td>{spot.avgCost}</td>
                                <td>{spot.visitorsPerYear}</td>
                                <td><button><MdOutlineTipsAndUpdates className="text-xl text-rose-600 font-bold" /></button></td>
                                <td><button onClick={() => handelDelete(spot._id)}><MdOutlineDeleteForever className="text-xl text-rose-600 font-bold" /></button></td>
                            </tr>)
                        }
                        {
                            spots.length === 0 && <tr>
                                <th></th>
                                <td className="text-xl font-bold">None</td>
                                <td className="text-xl font-bold">None</td>
                                <td className="text-xl font-bold">None</td>
                                <td className="text-xl font-bold">None</td>
                            </tr>
                        }
                        {/* const {visitorsPerYear, travelTime, spotName, seasonality, photo, avgCost, _id} = spot; */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAdd;