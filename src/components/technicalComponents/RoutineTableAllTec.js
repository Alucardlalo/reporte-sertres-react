import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import '../styles/ReportTypeTableAll.css';

class RoutineTableAllTec extends React.Component{

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
                    <div className="table-responsive-sm">
                        <table className="table table-dark">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Tipo Reporte</th>
                                <th>Dispositivo</th>
                                <th>Fecha Compromiso</th>
                                <th>Fecha Inicio</th>
                                <th>Fecha Fin</th>
                                <th>Estatus</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.reports.map((item) => (
                                <tr key={item.reportId} style={{textAlign:"center"}}>
                                    <td>{item.reportId}</td>
                                    <td>{item.reportType.reportType}</td>
                                    <td>{item.deviceId}</td>
                                    <td>{item.commitmentDate.slice(0,-9)}</td>
                                    <td>{item.beginDate.slice(0,-9)}</td>
                                    <td>{item.endDate.slice(0,-9)}</td>
                                    <td>{item.reportStatusRel.reportStatusDesc}</td>
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


export default RoutineTableAllTec;