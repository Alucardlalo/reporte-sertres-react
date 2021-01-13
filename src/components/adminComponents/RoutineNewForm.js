import React from 'react';
import axios from "axios";
import '../styles/newRoutine.css';
import * as moment from "moment/moment";

class RoutineNewForm extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            reportTypeId: '',
            deviceId : '',
            reportTittle : '',
            commitmentDate : '',
            beginDate : '',
            endDate : '',
            status : '',
            now : moment(new Date()).format("DD/MM/YYYY hh:mm:ss"),
            //objetos
            reportStatusA : [],
            reportTypeA: [],
            loading: true,
            error: null,

        }
        this.submitHadler = this.submitHadler.bind(this);
    }

    changeHadler = (e) =>{
        this.setState({[e.target.name]: e.target.value })
    }

    changeHadlerStatus = (e) =>{
        this.setState({status:e.target.value })
    }

    changeHadlerReportType = (e) =>{
        this.setState({reportTypeId:e.target.value })
    }

    submitHadler = async e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:8090/sertresreporte/reporte/save', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    componentDidMount() {
        this.fetchReportStatus();
        this.fetchReportType();

    }

    fetchReportStatus = async () =>{
        this.setState({loading:true, error: null, })

        try{
            const response = await fetch('http://localhost:8090/sertresreporte/reporte/status/all')
            const reportStatusPR = await response.json();
            this.setState({loading:false , reportStatusA: reportStatusPR })
        }catch(error){
            this.setState({loading: false , error: error })
        }
    }

    fetchReportType = async () =>{
        this.setState({loading:true, error: null, })

        try{
            const response = await fetch('http://localhost:8090/sertresreporte/reporttype/all')
            const reportTypePR = await response.json();
            this.setState({loading:false , reportTypeA: reportTypePR })
        }catch(error){
            this.setState({loading: false , error: error })
        }
    }

    render() {
        const { reportTypeId , deviceId, reportTittle , commitmentDate , beginDate , endDate , status } = this.state
        return (
            <React.Fragment>
                <div className = "container">
                    <p className = "titleMain">creacion de nueva rutina</p>
                    <form onSubmit={this.submitHadler}>
                        <div>
                            <table className="tableNewReportType table-dark">
                                <tbody>
                                <tr>
                                    <td className="titleNewRoutine">Tipo Rutina </td>
                                    <td className="inputNewRoutine">
                                        <select className="btn btn-outline-info" value={reportTypeId} onChange={this.changeHadlerReportType}>
                                            {this.state.reportTypeA.map((item) =>(
                                                <option key={item.reportTypeId} value={item.reportTypeId}>{item.reportType}</option>
                                            ))}
                                        </select>

                                    </td>
                                </tr>
                                
                                <tr>
                                    <td className="titleNewRoutine">Dispositivo</td>
                                    <td className="inputNewRoutine">
                                        <input
                                            type="text"
                                            name="deviceId"
                                            value={deviceId} onChange={this.changeHadler}
                                            className="btn btn-outline-info"
                                            autoComplete="off"/>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td className="titleNewRoutine">Titulo Rutina</td>
                                    <td className="inputNewRoutine">
                                        <input
                                            type="text"
                                            name="reportTittle"
                                            value={reportTittle} onChange={this.changeHadler}
                                            className="btn btn-outline-info"
                                            autoComplete="off"/>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td className="titleNewRoutine">Fecha Compromiso</td>
                                    <td className="inputNewRoutine">
                                        <input
                                            type="date"
                                            name="commitmentDate"
                                            value={commitmentDate} onChange={this.changeHadler}
                                            className="btn btn-outline-info"/>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td className="titleNewRoutine">Fecha Inicio</td>
                                    <td className="inputNewRoutine">
                                    <input 
                                        type="dateTime" disabled= "true" 
                                        size="19" value={this.state.now} 
                                        className="btn btn-outline-info"/>
                                        </td>
                                </tr>
                                
                                <tr>
                                    <td className="titleNewRoutine">Fecha Fin</td>
                                    <td className="inputNewRoutine">
                                        <input
                                            type="date"
                                            name="endDate"
                                            value={endDate} onChange={this.changeHadler}
                                            className="btn btn-outline-info"/>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td className="titleNewRoutine">Status</td>
                                    <td className="inputNewRoutine">
                                        <select className="btn btn-outline-info" value={status} onChange={this.changeHadlerStatus}>
                                            {this.state.reportStatusA.map((item) =>(
                                                <option key={item.reportStatusId} value={item.reportStatusId}>{item.reportStatusDesc}</option>
                                            ))}
                                        </select>

                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <br/><br/>
                            <div className="col-4">
                                <input type="submit" value="Guardar" className="btn btn-outline-info"/>
                            </div>

                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default RoutineNewForm;