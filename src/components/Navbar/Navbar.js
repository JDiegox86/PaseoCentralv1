import React, { useState, useSyncExternalStore } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import "./navbar.css";

const Navbar = () => {
    const [showMobileMenu, setshowMobileMenu] = useState(false)
    const { logout, user } = useAuth();

    console.log(user);
    const handleLogout = async () => {
        try {  
            await logout();
        } catch (error) {
            console.error(error.message);
        }
    };
    return (
        <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
        <img src="/assets/Logo.png" width="100" height="50" alt="" />

            <div class="row justify-content-md-center">

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Cine</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Artistas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Restaurantes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Eventos </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"> <i><FontAwesomeIcon icon={ faUser }/></i> Ingresar</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Registro</a>
                        </li>
                    </ul>

                </div>
            </div>

        </div>
    </nav>
    )
}
export default Navbar