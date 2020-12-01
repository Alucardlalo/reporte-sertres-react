import React from 'react';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import '../components/styles/ReportTypeTableAll.css';

class ReportTypeTableAll extends React.Component{
   
    render () {
        return(
            <div className="container">
                <h3 className="tableName">Tipo de Reporte</h3>
                <p className="tableName">tipos de reporte existentes</p>
                <div className="table-responsive-sm">
                    <table className="table table-bordered" id="TableTipoReporte">
                        
                    </table>

                </div>
            </div>
        );
    }
}

export default ReportTypeTableAll;