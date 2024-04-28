import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../auth/AuthProvider";

const AddSpot = () => {

    const {user} = useContext(AuthContext);
    // console.log(user.displayName);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (spot) => {
        
        const intAvgCost = parseInt(spot.avgCost);
        spot.intAvgCost = intAvgCost;

        // console.log(spot)

        fetch('http://localhost:5000/spots', {
            method: "POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(spot)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }


    return (
        <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
            <form onSubmit={handleSubmit(onSubmit)} className="container flex flex-col mx-auto space-y-12">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">HEY , <span className="text-3xl font-bold text-rose-600">{user.displayName}</span></p>
                        <p className="text-lg font-semibold text-slate-400">Be careful in terms of adding new spots here and always try to update your data with time. Thank you for your contribution.</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Tourist Spot Name</label>
                            <input type="text" placeholder="Enter spot name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-700 font-semibold focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                                {...register("spotName", { required: true })}
                            />
                            {errors.exampleRequired && <span className="text-red-600 font-bold text-base">This field is required</span>}
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Country</label>
                            <input type="text" placeholder="enter country" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-700 font-semibold focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                                {...register("counter", { required: true })}
                            />
                            {errors.exampleRequired && <span className="text-red-600 font-bold text-base">This field is required</span>}
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Location</label>
                            <input type="text" placeholder="Location" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-700 font-semibold focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                                {...register("location", { required: true })}
                            />
                            {errors.exampleRequired && <span className="text-red-600 font-bold text-base">This field is required</span>}
                        </div>
                        <div className="col-span-full">
                            <label className="text-sm">PhotoURL</label>
                            <input type="text" placeholder="Enter photo" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-700 font-semibold focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                                {...register("photo", { required: true })}
                            />
                            {errors.exampleRequired && <span className="text-red-600 font-bold text-base">This field is required</span>}
                        </div>
                        <div className="col-span-full grid grid-cols-4 gap-2">
                            <div className="col-span-full sm:col-span-1">
                                <label className="text-sm">Average Cost</label>
                                <input type="text" placeholder="Enter avg cost" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-700 font-semibold focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                                    {...register("avgCost", { required: true })}
                                />
                                {errors.exampleRequired && <span className="text-red-600 font-bold text-base">This field is required</span>}
                            </div>
                            <div className="col-span-full sm:col-span-1">
                                <label className="text-sm">Seasonality</label>
                                <input type="text" placeholder="enter suitable seasonality" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-700 font-semibold focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                                    {...register("seasonality", { required: true })}
                                />
                                {errors.exampleRequired && <span className="text-red-600 font-bold text-base">This field is required</span>}
                            </div>
                            <div className="col-span-full sm:col-span-1">
                                <label className="text-sm">Travel Time</label>
                                <input type="text" placeholder="enter travel time" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-700 font-semibold focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                                    {...register("travelTime", { required: true })}
                                />
                                {errors.exampleRequired && <span className="text-red-600 font-bold text-base">This field is required</span>}
                            </div>
                            <div className="col-span-full sm:col-span-1">
                                <label className="text-sm">Total Visitors Per Year</label>
                                <input type="text" placeholder="enter visitors number" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-700 font-semibold focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                                    {...register("visitorsPerYear", { required: true })}
                                />
                                {errors.exampleRequired && <span className="text-red-600 font-bold text-base">This field is required</span>}
                            </div>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">User Name</label>
                            <input type="text" defaultValue={user.displayName} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-700 font-semibold focus:dark:ring-violet-600 dark:border-gray-300 p-2"
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
                        </div>
                        <div className="col-span-full">
                            <label className="text-sm">Description</label>
                            <textarea placeholder="short description" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-700 font-semibold focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                                {...register("description", { required: true })}
                            ></textarea>
                            {errors.exampleRequired && <span className="text-red-600 font-bold text-base">This field is required</span>}
                        </div>
                        <button className="col-span-full border bg-neutral-700 text-white font-bold py-2 rounded-md">Add Spot</button>
                    </div>
                </fieldset>
                {/* <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Profile</p>
                        <p className="text-xs">Adipisci fuga autem eum!</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="username" className="text-sm">Username</label>
                            <input id="username" type="text" placeholder="Username" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-700 font-semibold focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="website" className="text-sm">Website</label>
                            <input id="website" type="text" placeholder="https://" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="bio" className="text-sm">Bio</label>
                            <textarea id="bio" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"></textarea>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="bio" className="text-sm">Photo</label>
                            <div className="flex items-center space-x-2">
                                <img src="https://source.unsplash.com/30x30/?random" alt="" className="w-10 h-10 dark:bg-gray-500 rounded-full dark:bg-gray-300" />
                                <button type="button" className="px-4 py-2 border rounded-md dark:border-gray-800">Change</button>
                            </div>
                        </div>
                    </div>
                </fieldset> */}
            </form>
        </section>
    );
};

export default AddSpot;