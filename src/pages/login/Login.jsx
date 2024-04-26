import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider";


const Login = () => {

    const {loginUser} = useContext(AuthContext);

    const handelLogin = e => {
        e.preventDefault();

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        loginUser(email, password)
        .then(result => {
            console.log(result.user);
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
                    <p className="text-center mb-2">Have no account? please <Link to='/register' className="text-rose-600 font-bold text-lg text-center">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;