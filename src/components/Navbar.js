import React from 'react';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


class Navbar extends React.Component{
    render() {
        return(
            <React.Fragment>
                <div className="container">
                    <div className="One__header">
                        <h2>Reporte Quincenal Sertres </h2>
                    </div>
                </div>
                <div className="container">
                    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                        <a className="navbar-brand">Sertres</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/reporttype">Tipo Reporte</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/report">Reporte</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/reportbody">Contenido Reporte</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </React.Fragment>
        )
    }
}
export default Navbar;