import React from 'react';

import RoutineBodyTableAll from "../components/RoutineBodyTableAll";
import Navbar from "../components/Navbar";


class Report extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            reportTypes : [],
            loading: true,
            error: null,
            reportType: '',

        }

    }

    componentDidMount() {
        this.fetchReportType()

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
        this.setState({[e.target.name]: e.target.value })
    }

    render(){
        const { reportType } = this.state
        return (
            <React.Fragment>
                <div className="One">
            <Navbar/>
        </div>
                <br></br>
                <div className="container align-content-center">
                    <table className="table table-dark d-table-row">
                        <tbody>
                            <tr>
                                <td>Seleciona tipo de reporte: </td>
                                <td>
                                    <select value={this.state.reportType} onChange={this.changeHadler}>
                                        {this.state.reportTypes.map((item) =>(
                                            <option key={item.reportTypeId} value={item.reportTypeId}>{item.reportType}</option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br/>

                <RoutineBodyTableAll />
            </React.Fragment>
        
        );
    }
}

export default Report;