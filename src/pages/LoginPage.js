import React from 'react';
import Login from "../components/Login";

class LoginPage extends React.Component{
    render() {
        return(
            <React.Fragment>
                <div className="container">
                    <h2 className="titleMain">Bienvenido a Rutinas Sertres</h2>
                </div>
                <div className="container">
                    <Login/>
                </div>
            </React.Fragment>
        )
    }
}
export default LoginPage