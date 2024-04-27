import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider";
import noImg from "../../assets/user.png"

const Nav = () => {

    const { user, logOutUser } = useContext(AuthContext);
    console.log(user);


    const [hover, setHover] = useState(false);
    const handelMouseHover = () => {
        setHover(true);
    }
    const handelMouseOut = () => {
        setHover(false);
    }


    const handelLogout = () => {
        setHover(false);
        logOutUser()
            .then(() => {
                alert('Logged out');
            })
            .catch(err => {
                console.log(err);
            })
    }

    const navLinks = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/allSpots'>All Spots</NavLink>
        <NavLink to='/addSpots'>Add Spots</NavLink>
        <NavLink to={`/myAdd/${user?.email}`}>My Add</NavLink>
    </>
    return (
        <div className="navbar bg-base-100 mb-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">TrekTrove</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-6">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {/* <div><h1>{user.email}</h1></div> */}
                <div className="space-x-2">
                    { user ?
                        <div onMouseOver={handelMouseHover} onMouseOut={handelMouseOut} className="w-16 h-16 mr-10">
                            <img className="mx-auto my-auto w-14 rounded-full mr-16" src={user?.photoURL ? user?.photoURL : noImg} alt="" />
                            <div className={`absolute duration-200 delay-1000 ${hover ? 'top-15 right-12' : '-top-80'} space-y-2 border rounded-lg p-4 z-50`}>
                                <h1 className="text-xl text-red-500 font-semibold">{user.displayName ? user.displayName : "Username not found"}</h1>
                                <hr />
                                <Link onClick={handelLogout} to='/login' className="border py-1 px-3 text-rose-600 font-bold">Logout</Link>
                            </div>
                        </div>
                        : <div className="space-x-4">
                            <Link to='/login' className="relative inline-block text-lg group">
                                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-rose-800 transition-colors duration-300 ease-out border-2 border-rose-700 rounded-lg group-hover:text-white">
                                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-rose-50"></span>
                                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-rose-700 group-hover:-rotate-180 ease"></span>
                                    <span className="relative">Login</span>
                                </span>
                                <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-rose-700 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                            </Link>
                            <Link to='/register' className="relative inline-block text-lg group">
                                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-rose-800 transition-colors duration-300 ease-out border-2 border-rose-900 rounded-lg group-hover:text-white">
                                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-rose-50"></span>
                                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-rose-900 group-hover:-rotate-180 ease"></span>
                                    <span className="relative">Register</span>
                                </span>
                                <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-rose-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                            </Link>
                        </div>

                    }
                </div>
            </div>
        </div>
    );
};

export default Nav;