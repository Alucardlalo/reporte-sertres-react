import React from 'react';
import axios from "axios";

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
                            <table className="col-3 tableNewReportType">
                                <tbody>
                                <tr>
                                    <td>Tipo Rutina </td>
                                    <td>
                                        <select value={reportTypeId} onChange={this.changeHadlerReportType}>
                                            {this.state.reportTypeA.map((item) =>(
                                                <option key={item.reportTypeId} value={item.reportTypeId}>{item.reportType}</option>
                                            ))}
                                        </select>

                                    </td>
                                </tr>
                                <tr><td><br/><br/></td></tr>
                                <tr>
                                    <td>Dispositivo</td>
                                    <td>
                                        <input
                                            type="text"
                                            name="deviceId"
                                            value={deviceId} onChange={this.changeHadler}/>
                                    </td>
                                </tr>
                                <tr><td><br/><br/></td></tr>
                                <tr>
                                    <td>Titulo Rutina</td>
                                    <td>
                                        <input
                                            type="text"
                                            name="reportTittle"
                                            value={reportTittle} onChange={this.changeHadler}/>
                                    </td>
                                </tr>
                                <tr><td><br/><br/></td></tr>
                                <tr>
                                    <td>Fecha Compromiso</td>
                                    <td>
                                        <input
                                            type="date"
                                            name="commitmentDate"
                                            value={commitmentDate} onChange={this.changeHadler}/>
                                    </td>
                                </tr>
                                <tr><td><br/><br/></td></tr>
                                <tr>
                                    <td>Fecha Inicio</td>
                                    <td>
                                        <input
                                            type="date"
                                            name="beginDate"
                                            value={beginDate} onChange={this.changeHadler}/>
                                    </td>
                                </tr>
                                <tr><td><br/><br/></td></tr>
                                <tr>
                                    <td>Fecha Fin</td>
                                    <td>
                                        <input
                                            type="date"
                                            name="endDate"
                                            value={endDate} onChange={this.changeHadler}/>
                                    </td>
                                </tr>
                                <tr><td><br/><br/></td></tr>
                                <tr>
                                    <td>Status</td>
                                    <td>
                                        <select value={status} onChange={this.changeHadlerStatus}>
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
                                <input type="submit" value="Guardar"/>
                            </div>

                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default RoutineNewForm;