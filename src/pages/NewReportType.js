import React from 'react';
import ReportTypeNewForm from '../components/ReportTypeNewForm'

class NewReportType extends React.Component{

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
                                <a className="nav-link active" href="/reporttype" id="#menu1">Tipo Reporte</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/report" id="#menu2">Reporte</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/reportbody" id="#menu3">Contenido de Reporte</a>
                            </li>
                        </ul>
                    </div>
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

export default NewReportType;