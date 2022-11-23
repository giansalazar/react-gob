import React, { useContext } from 'react'
import logo from '../assets/slp_logo.png'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Context from '../context/Context';

function Navbar() {

    const { usuarioSesion, handleLogout } = useContext(Context)

    if (usuarioSesion) {
        return (
            <nav className="navbar navbar-expand-lg bg-light fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img className='logo_slp' src={logo} alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/react-gob">Inicio</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="bi bi-person-lines-fill"></i> Empleados
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/react-gob/empleados">Ver Empleados</Link></li>

                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="bi bi-person-circle"></i> {usuarioSesion.username}
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" onClick={handleLogout}>Cerrar Sesión</Link></li>

                                </ul>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        )
    } else {
        return (
            <nav className="navbar navbar-expand-lg bg-light fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img className='logo_slp' src={logo} alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/react-gob">Inicio</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="bi bi-person-circle"></i>
                                </a>
                                <ul className="dropdown-menu">

                                    <li><Link className="dropdown-item" to="/react-gob/login/">Iniciar Sesión</Link></li>
                                    

                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

}

export default Navbar