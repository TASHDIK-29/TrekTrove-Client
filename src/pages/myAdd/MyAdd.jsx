import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../auth/AuthProvider";
import { MdOutlineTipsAndUpdates, MdOutlineDeleteForever } from "react-icons/md";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaUserEdit } from "react-icons/fa";

const MyAdd = () => {

    const { user } = useContext(AuthContext);
    // console.log(user);

    const [spots, setSpots] = useState([]);
    // console.log(spots);

    useEffect(() => {
        fetch(`https://assignment-10-server-rho-nine.vercel.app/myAdds/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setSpots(data);
            })
    }, [])


    const handelDelete = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://assignment-10-server-rho-nine.vercel.app/spots/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount) {
                            const remaining = spots.filter(spot => spot._id !== id);
                            setSpots(remaining);

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your spot has been deleted.",
                                icon: "success"
                            });
                        }
                    })



            }
        });
        

    }

    return (
        <div>
            <h1 className="text-3xl font-bold my-5 text-center">{user?.displayName ? user.displayName : 'Your'}'s List</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th className="text-xl font-semibold">Spot Name</th>
                            <th className="text-xl font-semibold">Country</th>
                            <th className="text-xl font-semibold">Average Cost</th>
                            <th className="text-xl font-semibold">Visitors Per Year</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            spots.map((spot, idx) => <tr key={idx}>
                                <th className="text-lg font-normal">{idx + 1}</th>
                                <td className="text-lg font-normal">{spot.spotName}</td>
                                <td className="text-lg font-normal">{spot.counter}</td>
                                <td className="text-lg font-normal">{spot.avgCost}</td>
                                <td className="text-lg font-normal">{spot.visitorsPerYear}</td>
                                <td>
                                    <button>
                                        <Link to={`/update/${spot._id}`}
                                            data-tooltip-id="update" data-tooltip-content="Update"><FaUserEdit className="text-2xl text-rose-600 font-bold" /></Link>
                                        <Tooltip id="update"
                                            place="top"
                                        />
                                    </button>
                                </td>
                                <td>
                                    <button data-tooltip-id="delete" data-tooltip-content="Delete" onClick={() => handelDelete(spot._id)}><MdOutlineDeleteForever className="text-3xl text-rose-600 font-bold" /></button>
                                    <Tooltip id="delete" />
                                </td>
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