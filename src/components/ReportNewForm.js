import React from 'react';
import axios from "axios";

class ReportNewForm extends React.Component{

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
        }
    }

    changeHadler = (e) =>{
        this.setState({[e.target.name]: e.target.value })
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


    render() {
        const { reportTypeId , deviceId, reportTittle , commitmentDate , beginDate , endDate , status } = this.state
        return (
            <React.Fragment>
                <div className = "container">
                    <p className = "titleMain">creacion de nuevo reporte</p>
                    <form onSubmit={this.submitHadler}>
                        <div>
                            <table className="col-3 tableNewReportType">
                                <tbody>
                                <tr>
                                    <td>Tipo Reporte </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="reportTypeId"
                                            value={reportTypeId} onChange={this.changeHadler} />
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
                                    <td>Titulo Reporte</td>
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
                                            type="text"
                                            name="commitmentDate"
                                            value={commitmentDate} onChange={this.changeHadler}/>
                                    </td>
                                </tr>
                                <tr><td><br/><br/></td></tr>
                                <tr>
                                    <td>Fecha Inicio</td>
                                    <td>
                                        <input
                                            type="text"
                                            name="beginDate"
                                            value={beginDate} onChange={this.changeHadler}/>
                                    </td>
                                </tr>
                                <tr><td><br/><br/></td></tr>
                                <tr>
                                    <td>Fecha Fin</td>
                                    <td>
                                        <input
                                            type="text"
                                            name="endDate"
                                            value={endDate} onChange={this.changeHadler}/>
                                    </td>
                                </tr>
                                <tr><td><br/><br/></td></tr>
                                <tr>
                                    <td>Status</td>
                                    <td>
                                        <input
                                            type="text"
                                            name="status"
                                            value={status} onChange={this.changeHadler}/>
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

export default ReportNewForm;