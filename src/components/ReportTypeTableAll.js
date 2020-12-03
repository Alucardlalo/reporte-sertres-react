import React from 'react';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import '../components/styles/ReportTypeTableAll.css';
import ReportType from "../pages/ReportType";

class ReportTypeTableAll extends React.Component{
    

    render () {
        return(
        <React.Fragment>
            <div className="container">
                <h3 className="tableName">Tipo de Reporte</h3>
                <p className="tableName">tipos de reporte existentes</p>
                <a href="/reporttype/new" className="buttons"> Nuevo Tipo Reporte</a>
                <div className="table-responsive-sm">
                    <table className="table table-bordered">
                        <thead>
                            <th>#</th>
                            <th>Tipo reporte</th>
                            <th>Descripcion</th>
                        </thead>
                        <tbody>
                            <tr>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
        );
    }
}

export default ReportTypeTableAll;