import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";


const Login = () => {

    const { loginUser, googleLogin, githubLogin } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const page = location?.state || '/';
    const handelLogin = e => {
        e.preventDefault();

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate(page);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handelGoogle = () => {
        googleLogin()
            .then(result => {
                navigate(page);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handelGitHub = () => {
        githubLogin()
            .then(result => {
                navigate(page);
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <div className=" min-h-screen bg-base-200">
            <div className="text-center">
                <h1 className="text-5xl font-bold">Login Now!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div className="flex flex-col lg:flex-row-reverse gap-10 border">
                <div className="text-center w-1/2 border">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-2/5 shadow-2xl bg-base-100 border">
                    <form onSubmit={handelLogin} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-pink-800 hover:bg-pink-800 text-white font-bold">Login</button>
                        </div>
                    </form>
                    <div className="md:flex justify-between">
                        <button onClick={handelGoogle} className="border border-blue-500 rounded-lg py-1 px-1 flex gap-4 items-center justify-center w-2/5 mx-auto text-bs font-bold text-blue-600 mb-3"><FaGoogle className="text-blue-600" />Sing in With Google</button>
                        <button onClick={handelGitHub} className="border border-blue-500 rounded-lg py-1 px-1 flex gap-4 items-center justify-center w-2/5 mx-auto text-bs font-bold text-gray-600 mb-3"><FaGithub className="text-gray-600" />Sing in With Github</button>
                    </div>

                    <p className="text-center mb-2">Have no account? please <Link to='/register' className="text-rose-600 font-bold text-lg text-center">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;