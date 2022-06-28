import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context";


export const NavBar = () => {

    const  { logged, logout, user}  = useContext( AuthContext);

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login', {
            replace: true
        })
    }

    const activeClass = 'active'
    return (

            <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

                <Link
                    className="navbar-brand"
                    to="/"
                >
                    Asociaciones
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">
                        <NavLink
                            className={({ isActive }) => `nav-item nav-link ${isActive && activeClass} `}
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => `nav-item nav-link ${isActive && activeClass} `}
                            to="/DC"
                        >
                            Dc
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => `nav-item nav-link ${isActive && activeClass} `}
                            to="/search"
                        >
                            Search
                        </NavLink>
                    </div>
                    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                        <ul className="navbar-nav ml-auto">
                            <span className="nav-item nav-link text-info">
                            Usuario: 
                                { 
                                    logged && user? user.name : "Invitado"
                                }
                            </span>
                            <button
                                className="nav-item nav-link btn"
                                onClick={handleLogout}
                            >
                                {
                                    logged ? "Logout" : "Login"
                                }
                            </button>
                        </ul>
                    </div>
                </div>
            </nav>

    );
};
