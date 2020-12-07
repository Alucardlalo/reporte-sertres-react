import React from 'react';
import ReportNewForm from '../components/ReportNewForm'

class NewReport extends React.Component{

    render(){
        return (
            <React.Fragment>
                <div className="One">
                    <div className="One__header">
                        <h2>Reporte Quincenal Sertres </h2>
                    </div>

                    <div className="container">
                        <ul className="nav nav-pills" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link" href="/home" id="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/reporttype" id="#menu1">Tipo Reporte</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/report" id="#menu2">Reporte</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/reportbody" id="#menu3">Contenido de Reporte</a>
                            </li>
                        </ul>
                    </div>
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