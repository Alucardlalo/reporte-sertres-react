import React from 'react';
import RoutineNewForm from '../components/RoutineNewForm'
import Navbar from "../components/Navbar";

class NewRoutine extends React.Component{

    render(){
        return (
            <React.Fragment>
                <div className="One">
                   <Navbar />
                </div>
                <br/>
                <div className="container">
                    <h2 className="titleMain">Nuevo Reporte</h2>
                </div>
                <div>
                    <RoutineNewForm/>
                </div>
            </React.Fragment>
        )
    }
}

export default NewRoutine;