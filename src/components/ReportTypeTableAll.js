import React from 'react';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import '../components/styles/ReportTypeTableAll.css';

class ReportTypeTableAll extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            reportTypes : [],
            loading: true,
            error: null,
        }
    }

    componentDidMount() {
       this.fetchReportType()

    }

    fetchReportType = async () =>{
        this.setState({loading:true, error: null })

        try{
            const response = await fetch('http://localhost:8090/sertresreporte/reporttype/all')
            const reportTypes = await response.json();
            this.setState({loading:false , reportTypes: reportTypes })
        }catch(error){
            this.setState({loading: false , error: error })
        }
    }

    render () {
    if(this.state.loading == true){
        return <div className="container">
            <button className="btn btn-primary" disabled>
                <span className="spinner-border spinner-border-sm"></span>
                Loading ...
            </button>
        </div>
    }
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
                                    <th>Tipo Reporte</th>
                                    <th>Descripción</th>
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