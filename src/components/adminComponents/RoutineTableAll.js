import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import '../styles/ReportTypeTableAll.css';
import * as moment from "moment/moment";

class RoutineTableAll extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            reports : [],
            loading: true,
            error: null,

        }
    }

    componentDidMount() {
        this.fetchReport()

    }

    fetchReport = async () =>{
        this.setState({loading:true, error: null })

        try{
            const response = await fetch('http://localhost:8090/sertresreporte/reporte/all')
            const reports = await response.json();
            this.setState({loading:false , reports: reports })

        }catch(error){
            this.setState({loading: false , error: error })
        }
    }

    render () {
        if(this.state.loading === true){
            return <div className="container">
                <button className="btn btn-primary loadingC" disabled>
                    <span className="spinner-border spinner-border-sm"></span>
                    Loading...
                </button>
            </div>
        }
        if(this.state.error){
            return `Error: ${this.state.error.message}`;
        }
        return(
            <React.Fragment>
                <div className="container">
                    <h3 className="tableName">Rutinas</h3>
                    <p className="tableName">Rutinas existentes</p>
                    <a href="/Routine/new" className="buttons"> Nueva Rutina</a>
                    <div className="table-responsive-sm">
                        <table className="table table-dark">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Tipo Reporte</th>
                                <th>Dispositivo</th>
                                <th>Nombre</th>
                                <th>Fecha Compromiso</th>
                                <th>Fecha Inicio</th>
                                <th>Fecha Fin</th>
                                <th>Estatus</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.reports.sort(({reportId: previousreportId}, {reportId:currentreportId})=> currentreportId - previousreportId).map((item) => (
                                <tr key={item.reportId}>
                                    <td>{item.reportId}</td>
                                    <td style={{textAlign:"left"}}>{item.reportType.reportType}</td>
                                    <td>{item.deviceId}</td>
                                    <td style={{textAlign:"left"}}>{item.reportTittle}</td>
                                    <td>{moment(item.commitmentDate).format('DD - MMM - YYYY')}</td>
                                    <td>{moment(item.beginDate).format('DD - MMM - YYYY')}</td>
                                    <td>{moment(item.endDate).format('DD - MMM - YYYY')}</td>
                                    <td style={{textAlign:"left"}}>{item.reportStatusRel.reportStatusDesc}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}


export default RoutineTableAll;