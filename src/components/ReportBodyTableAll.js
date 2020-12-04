import React from 'react';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import '../components/styles/ReportTypeTableAll.css';

class ReportBodyTableAll extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            reportsBody : [],
            loading: true,
            error: null,
        }
    }

    componentDidMount() {
        this.fetchReportBody()

    }

    fetchReportBody = async () =>{
        this.setState({loading:true, error: null })

        try{
            const response = await fetch('http://localhost:8090/sertresreporte/variable/all')
            const reportsBody = await response.json();
            this.setState({loading:false , reportsBody: reportsBody })
        }catch(error){
            this.setState({loading: false , error: error })
        }
    }

    render () {
        if(this.state.loading == true){
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
                    <h3 className="tableName">Contenido de Reporte</h3>
                    <p className="tableName"></p>
                    <a href="/reportbody/new" className="buttons"> Nuevo Campo en Reporte</a>
                    <div className="table-responsive-sm">
                        <table className="table table-dark">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Tipo Reporte</th>
                                <th>Etiqueta Variable</th>
                                <th>Orden</th>

                            </tr>
                            </thead>
                            <tbody>
                            {this.state.reportsBody.map((item) => (
                                <tr key={item.variableId}>
                                    <td>{item.variableId}</td>
                                    <td>{item.reportType.reportType}</td>
                                    <td>{item.variableLabel}</td>
                                    <td>{item.order}</td>

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


export default ReportBodyTableAll;