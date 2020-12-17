import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import '../components/styles/ReportTypeTableAll.css';

class RoutineBodyTableAll extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            reportsBody : [],
            loading: true,
            error: null,
            reportTypes : [],
            reportType: '',
            isSelected: false,

        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.fetchReportBody();
        this.fetchReportType();

    }

    handleClick(e){
        if(this.state.reportType !== 0 && this.state.reportType !== ''){

        }else{
            alert('reportType else' + this.state.reportType);
        }

    }

    fetchReportType = async () =>{
        this.setState({loading:true, error: null, })

        try{
            const response = await fetch('http://localhost:8090/sertresreporte/reporttype/all')
            const reportTypes = await response.json();
            this.setState({loading:false , reportTypes: reportTypes })
        }catch(error){
            this.setState({loading: false , error: error })
        }
    }

    changeHadler = (e) =>{
        this.setState({reportType:e.target.value })
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
                    <form>
                        <table className="table table-dark d-table-row">
                            <tbody>
                            <tr>
                                <td>Seleciona tipo de rutina: </td>
                                <td>
                                    <select value={this.state.reportType} onChange={this.changeHadler}>
                                        <option value={0}>Todos</option>
                                        {this.state.reportTypes.map((item) =>(
                                            <option key={item.reportTypeId} value={item.reportTypeId}>{item.reportType}</option>
                                        ))}
                                    </select>
                                </td>
                                <td>
                                    <input
                                        type="button"
                                        value="Seleccionar"
                                        className="btn btn-outline-info"
                                        onClick={this.handleClick}
                                    />
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </form>
                    <h3 className="tableName">Contenido de Reporte</h3>
                    <p className="tableName"></p>
                    <a href="/Routinebody/new" className="buttons"> Nuevo Campo en Rutinas</a>
                    <div className="table-responsive-sm">
                        <table className="table table-dark">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Tipo Rutina</th>
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


export default RoutineBodyTableAll;