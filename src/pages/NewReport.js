import React from 'react';
import ReportNewForm from '../components/ReportNewForm'
import Navbar from "../components/Navbar";

class NewReport extends React.Component{

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
                    <ReportNewForm/>
                </div>
            </React.Fragment>
        )
    }
}

export default NewReport;