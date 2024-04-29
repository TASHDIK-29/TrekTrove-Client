import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {

    const { user, loader } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    if (loader) {
        return <div className="flex justify-center"><span className="loading loading-infinity loading-lg"></span></div>
    }

    if (user) {
        return children;
    }

    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have to Login first!"
        });

    return (
        <>
            <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
        </>
    )
};

export default PrivateRoute;