import React from 'react';
import ReportTypeNewForm from '../components/RoutineTypeNewForm'
import Navbar from "../components/Navbar";

class NewRoutineType extends React.Component{

    render(){
        return (
            <React.Fragment>
                <div className="One">
                  <Navbar />
                </div>
                <br/>
                <div className="container">
                    <h2 className="titleMain">Nuevo Tipo de Reporte</h2>
                </div>
                <div>
                 <ReportTypeNewForm />
                </div>
            </React.Fragment>
        )
    }
}

export default NewRoutineType;