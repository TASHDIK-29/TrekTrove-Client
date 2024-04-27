import { Link, Navigate, useNavigate } from "react-router-dom";

const Error = () => {

    const navigate = useNavigate();

    const handelGoBack = () =>{
        navigate(-1);
    }
    return (
        <div className="h-screen flex flex-col justify-center items-center space-y-2">
            <h1 className="text-rose-600 font-bold text-6xl underline">404</h1>
            <h1 className="text-gray-600 font-semibold text-xl ">Oppss: Page Not Found</h1>
            <br />
           <button onClick={handelGoBack} className="text-lg font-semibold text-rose-500">Go Back</button>
        </div>
    );
};

export default Error;