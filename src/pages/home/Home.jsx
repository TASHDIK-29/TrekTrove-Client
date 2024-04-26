import { useContext } from "react";
import { AuthContext } from "../../auth/AuthProvider";

const Home = () => {

    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <h1 className="text-3xl">Home</h1>
        </div>
    );
};

export default Home;