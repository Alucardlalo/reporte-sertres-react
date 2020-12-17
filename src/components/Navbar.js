import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Redirect} from "react-router-dom";


class Navbar extends React.Component{
    constructor() {
        super();
        this.state = {
            loginN: true,
            logoutN: false,
        }
        this.logout =this.logout.bind(this);
    }

    logout(){
        if(this.state.logoutN === false ){
           console.log(this.loginN);
           console.log(this.logoutN)
            this.setState({loginN:false , logoutN:true })
        }
    }

    render() {
        if(this.state.logoutN === true){
            return(<Redirect to="/" />)
        }
        return(
            <React.Fragment>
                <div className="container">
                    <div className="One__header">
                        <h2>Rutinas Sertres </h2>
                    </div>
                </div>
                <div className="container">
                    <form>
                       <button className="btnLogout" onClick={this.logout}>salir</button>
                    </form>
                    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                        <h3 className="navbar-brand">Sertres</h3>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/home">Dashboard</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Routinetype">Tipo Rutina</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Routine">Rutinas</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Routinebody">Contenido Rutinas</a>
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