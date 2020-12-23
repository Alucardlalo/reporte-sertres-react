import React from 'react';
import '../styles/ReportTypeNewForm.css';
import axios from 'axios';

class routineTypeNewForm extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            reportType: '',
            descriptionI : '',
        }
    }

    changeHadler = (e) =>{
        this.setState({[e.target.name]: e.target.value })
    }
/*
    submitHadler = async e => {
        e.preventDefault()
        axios.post('http://localhost:8090/sertresreporte/reporttype/save', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }*/

    submitHadler = async e =>{
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ reportType: this.state.reportType , descriptionI:this.state.descriptionI})
        };
        console.log(requestOptions)
        fetch('http://localhost:8090/sertresreporte/reporttype/save', requestOptions)
            .then(response => response.json());
}

    render(){
        const { reportType , descriptionI } = this.state
        return (
            <React.Fragment>
                <div className = "container">
                    <p className = "titleMain">creacion de nuevo tipo de rutina</p>
                    <form onSubmit={this.submitHadler}>
                        <div>
                            <table className="col-3 tableNewReportType">
                                <tbody>
                                <tr>
                                    <td>Nuevo Tipo Rutina </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="reportType"
                                            value={reportType} onChange={this.changeHadler} />
                                    </td>
                                </tr>
                                <tr><td><br/><br/></td></tr>
                                <tr>
                                    <td>Descripción</td>
                                    <td>
                                        <textarea
                                            type="text"
                                            name="descriptionI"
                                            value={descriptionI} onChange={this.changeHadler}/>
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
        );
    }
}

export default routineTypeNewForm;