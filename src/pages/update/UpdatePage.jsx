import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../auth/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import toast from "react-hot-toast";




const UpdatePage = () => {

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    const { user } = useContext(AuthContext);
    console.log(user.displayName);
    console.log(user.email);

    const loadedSpot = useLoaderData();
    // console.log(loadedSpot);

    const { visitorsPerYear, travelTime, spotName, seasonality, photo, location, counter, avgCost, description, _id } = loadedSpot;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (spot) => {

        const intAvgCost = parseInt(spot.avgCost);
        spot.intAvgCost = intAvgCost;
        console.log(spot)

        fetch(`https://assignment-10-server-rho-nine.vercel.app/spots/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(spot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.modifiedCount) {
                    let timerInterval;
                    Swal.fire({
                        title: "Updating...",
                        html: "Spot will update in <b></b> milliseconds.",
                        timer: 2000,
                        timerProgressBar: true,
                        didOpen: () => {
                            Swal.showLoading();
                            const timer = Swal.getPopup().querySelector("b");
                            timerInterval = setInterval(() => {
                                timer.textContent = `${Swal.getTimerLeft()}`;
                            }, 100);
                        },
                        willClose: () => {
                            clearInterval(timerInterval);
                        }
                    }).then((result) => {
                        /* Read more about handling dismissals below */
                        if (result.dismiss === Swal.DismissReason.timer) {
                            toast.success('Successfully Updated !')
                        }
                    });

                   

                }
            })
    }


    return (
        <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
            <form onSubmit={handleSubmit(onSubmit)} className="container flex flex-col mx-auto space-y-12">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                    {/* <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Personal Inormation</p>
                        <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
                    </div> */}
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-4">
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Tourist Spot Name</label>
                            <input type="text" defaultValue={spotName} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-700 font-semibold focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                                {...register("spotName", { required: true })}
                            />
                            {errors.exampleRequired && <span className="text-red-600 font-bold text-base">This field is required</span>}
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Country</label>
                            <input type="text" defaultValue={counter} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-700 font-semibold focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                                {...register("counter", { required: true })}
                            />
                            {errors.exampleRequired && <span className="text-red-600 font-bold text-base">This field is required</span>}
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Location</label>
                            <input type="text" defaultValue={location} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-700 font-semibold focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                                {...register("location", { required: true })}
                            />
                            {errors.exampleRequired && <span className="text-red-600 font-bold text-base">This field is required</span>}
                        </div>
                        <div className="col-span-full">
                            <label className="text-sm">PhotoURL</label>
                            <input type="text" defaultValue={photo} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-700 font-semibold focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                                {...register("photo", { required: true })}
                            />
                            {errors.exampleRequired && <span className="text-red-600 font-bold text-base">This field is required</span>}
                        </div>
                        <div className="col-span-full grid grid-cols-4 gap-2">
                            <div className="col-span-full sm:col-span-1">
                                <label className="text-sm">Average Cost</label>
                                <input type="text" defaultValue={avgCost} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-700 font-semibold focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                                    {...register("avgCost", { required: true })}
                                />
                                {errors.exampleRequired && <span className="text-red-600 font-bold text-base">This field is required</span>}
                            </div>
                            <div className="col-span-full sm:col-span-1">
                                <label className="text-sm">Seasonality</label>
                                <input type="text" defaultValue={seasonality} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-700 font-semibold focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                                    {...register("seasonality", { required: true })}
                                />
                                {errors.exampleRequired && <span className="text-red-600 font-bold text-base">This field is required</span>}
                            </div>
                            <div className="col-span-full sm:col-span-1">
                                <label className="text-sm">Travel Time</label>
                                <input type="text" defaultValue={travelTime} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-700 font-semibold focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                                    {...register("travelTime", { required: true })}
                                />
                                {errors.exampleRequired && <span className="text-red-600 font-bold text-base">This field is required</span>}
                            </div>
                            <div className="col-span-full sm:col-span-1">
                                <label className="text-sm">Total Visitors Per Year</label>
                                <input type="text" defaultValue={visitorsPerYear} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-700 font-semibold focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                                    {...register("visitorsPerYear", { required: true })}
                                />
                                {errors.exampleRequired && <span className="text-red-600 font-bold text-base">This field is required</span>}
                            </div>
                        </div>
                        {/* <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">User Name</label>
                            <input type="text" defaultValue={user?.displayName} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-700 font-semibold focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                                {...register("userName", { required: true })}
                            />
                            {errors.exampleRequired && <span className="text-red-600 font-bold text-base">This field is required</span>}
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Email</label>
                            <input type="email" defaultValue={user.email} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-700 font-semibold focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                                {...register("email", { required: true })}
                            />
                            {errors.exampleRequired && <span className="text-red-600 font-bold text-base">This field is required</span>}
                        </div> */}
                        <div className="col-span-full">
                            <label className="text-sm">Description</label>
                            <textarea defaultValue={description} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-700 font-semibold focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                                {...register("description", { required: true })}
                            ></textarea>
                            {errors.exampleRequired && <span className="text-red-600 font-bold text-base">This field is required</span>}
                        </div>
                        <button className="col-span-full border bg-neutral-700 text-white font-bold py-2 rounded-md">Update</button>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default UpdatePage;