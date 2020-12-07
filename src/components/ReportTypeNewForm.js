import React from 'react';
import './styles/ReportTypeNewForm.css'


class reportTypeNewForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {

                reportType: '',
                descriptionI: '',

        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeDesc = this.handleChangeDesc.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleChangeName(event) {
        this.setState({
            reportType: event.target.value
        });
    }

    handleChangeDesc(event) {
        this.setState({
            descriptionI: event.target.value
        });
    }


    handleSubmit(event) {
        alert('A report type was submitted: ' + this.state.reportType);
        alert('A Description was submitted: ' + this.state.descriptionI);
        event.preventDefault();
    }

    render(){
        return (
            <React.Fragment>
                <div className = "container">
                    <p className = "titleMain">creacion de nuevo tipo de reporte</p>
                    <form onSubmit={this.handleSubmit} id="formulario">
                        <div>
                            <table className="col-3 tableNewReportType">
                                <tr>
                                    <td>Nombre Nuevo Reporte</td>
                                    <td><input type="text" value={this.state.reportType} name="name" onChange={this.handleChangeName} /></td>
                                </tr>
                                <br/><br/>
                                <tr>
                                    <td>Descripción</td>
                                    <td><input type="text" value={this.state.descriptionI} name = "desc" onChange={this.handleChangeDesc} /></td>
                                </tr>
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

export default reportTypeNewForm;