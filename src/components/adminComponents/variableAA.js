import React ,{useLayoutEffect}from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../global.css';
import '../styles/variableAA.css';
import * as moment from "moment/moment";


class variableAA extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            variable : [],
            variableData:[],
            loading:true, 
            error: null,
            variableAUX: [],
            variableDataAUX: [],    
            now : moment(new Date()).format("DD/MM/YYYY hh:mm:ss"),
            inheritedRoutine: this.props.routine,
            inheritedStatus: this.props.status,
            inheritedRoutineData: this.props.data,
            inheritedRoutineData1: [],
            statusActual: false,
            Q1: '',Q2: '',Q3: '',Q4: '',Q5: '',Q6: '',Q7: '',Q8: '',Q9: '',Q10: '',
            Q11: '',Q12: '',Q13: '',Q14: '',Q15: '',Q16: '',Q17: '',Q18: '',Q19: '',
            
        }
        
    }

    componentDidMount() {
        this.fetchVariable();
        this.statusComprovation();
        this.seleccionarData();
    }

    seleccionarData(){
        var routineData = []
        this.state.inheritedRoutineData.sort(({order: previousOrder}, {order:currentOrder})=> previousOrder - currentOrder).map((data) =>{
            routineData.push(data.data);
        })
        this.setState({inheritedRoutineData1: routineData})
        alert('El reporte de rutina esta completo, no se puede editar')
    }

    statusComprovation(){
        if(this.state.inheritedStatus == 1){
            this.setState({statusActual: true})
        }else{
            this.setState({statusActual: false})
        }
    }

    changeHadlerQ1 = () =>{this.setState({Q1: this.state.now })}
    changeHadlerQ2 = (e) =>{this.setState({Q2: e.target.value })}
    changeHadlerQ3 = (e) =>{this.setState({Q3: e.target.value })}
    changeHadlerQ4 = (e) =>{this.setState({Q4: e.target.value })}
    changeHadlerQ5 = (e) =>{this.setState({Q5: e.target.value })}
    changeHadlerQ6 = (e) =>{this.setState({Q6: e.target.value })}
    changeHadlerQ7 = (e) =>{this.setState({Q7: e.target.value })}
    changeHadlerQ8 = (e) =>{this.setState({Q8: e.target.value })}
    changeHadlerQ9 = (e) =>{this.setState({Q9: e.target.value })}
    changeHadlerQ10 = (e) =>{this.setState({Q10: e.target.value })}
    changeHadlerQ11 = (e) =>{this.setState({Q11: e.target.value })}
    changeHadlerQ12 = (e) =>{this.setState({Q12: e.target.value })}
    changeHadlerQ13 = (e) =>{this.setState({Q13: e.target.value })}
    changeHadlerQ14 = (e) =>{this.setState({Q14: e.target.value })}
    changeHadlerQ15 = (e) =>{this.setState({Q15: e.target.value })}
    changeHadlerQ16 = (e) =>{this.setState({Q16: e.target.value })}
    changeHadlerQ17 = (e) =>{this.setState({Q17: e.target.value })}
    changeHadlerQ18 = (e) =>{this.setState({Q18: e.target.value })}
    changeHadlerQ19 = (e) =>{this.setState({Q19: e.target.value })}

    fetchVariable = async () =>{
        this.setState({loading:true, error: null })
       
        try{
            const response = await fetch('http://localhost:8090/sertresreporte/variable/reporttype/1')
            const variable = await response.json();
            this.setState({loading:false , variable: variable })
            var variableAUX = [];
            this.state.variable.sort(({order: previousOrder}, {order:currentOrder})=> previousOrder - currentOrder).map((variableForm) =>{
                variableAUX.push(variableForm.variableName);
            })
            this.setState({variableAUX:variableAUX});
        }catch(error){
            this.setState({loading: false , error: error })
        }
    }
   
    submitHadler = async e =>{
        e.preventDefault();
        this.setState({Q1:this.state.now});
        this.SaveQ1();this.SaveQ2();this.SaveQ3();this.SaveQ4();this.SaveQ5();this.SaveQ6();
        this.SaveQ7();this.SaveQ8();this.SaveQ9();this.SaveQ10();this.SaveQ11();this.SaveQ12();
        this.SaveQ13();this.SaveQ14();this.SaveQ15();this.SaveQ16();this.SaveQ17();this.SaveQ18();
        this.SaveQ19();
    }

     SaveQ1 = async e =>{
        const requestOptions1 = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ variableId: '1' , data: this.state.Q1 , reportId: this.state.inheritedRoutine})
        };
        console.log(requestOptions1)
        fetch('http://localhost:8090/sertresreporte/variabledata/save', requestOptions1)
            .then(response => response.json());
    }

    SaveQ2 = async e =>{
        const requestOptions2 = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ variableId: '2' , data: this.state.Q2 , reportId: this.state.inheritedRoutine})
        };
        console.log(requestOptions2)
        fetch('http://localhost:8090/sertresreporte/variabledata/save', requestOptions2)
            .then(response => response.json());
    }
    SaveQ3 = async e =>{
        const requestOptions1 = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ variableId: '3' , data: this.state.Q3 , reportId: this.state.inheritedRoutine})
        };
        console.log(requestOptions1)
        fetch('http://localhost:8090/sertresreporte/variabledata/save', requestOptions1)
            .then(response => response.json());
    }
    SaveQ4 = async e =>{
        const requestOptions1 = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ variableId: '4' , data: this.state.Q4 , reportId: this.state.inheritedRoutine})
        };
        console.log(requestOptions1)
        fetch('http://localhost:8090/sertresreporte/variabledata/save', requestOptions1)
            .then(response => response.json());
    }
    SaveQ5 = async e =>{
        const requestOptions1 = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ variableId: '5' , data: this.state.Q5 , reportId: this.state.inheritedRoutine})
        };
        console.log(requestOptions1)
        fetch('http://localhost:8090/sertresreporte/variabledata/save', requestOptions1)
            .then(response => response.json());
    }
    SaveQ6 = async e =>{
        const requestOptions1 = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ variableId: '6' , data: this.state.Q6 , reportId: this.state.inheritedRoutine})
        };
        console.log(requestOptions1)
        fetch('http://localhost:8090/sertresreporte/variabledata/save', requestOptions1)
            .then(response => response.json());
    }
    SaveQ7 = async e =>{
        const requestOptions1 = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ variableId: '7' , data: this.state.Q7 , reportId: this.state.inheritedRoutine})
        };
        console.log(requestOptions1)
        fetch('http://localhost:8090/sertresreporte/variabledata/save', requestOptions1)
            .then(response => response.json());
    }
    SaveQ8 = async e =>{
        const requestOptions1 = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ variableId: '8' , data: this.state.Q8 , reportId: this.state.inheritedRoutine})
        };
        console.log(requestOptions1)
        fetch('http://localhost:8090/sertresreporte/variabledata/save', requestOptions1)
            .then(response => response.json());
    }
    SaveQ9 = async e =>{
        const requestOptions1 = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ variableId: '9' , data: this.state.Q9 , reportId: this.state.inheritedRoutine})
        };
        console.log(requestOptions1)
        fetch('http://localhost:8090/sertresreporte/variabledata/save', requestOptions1)
            .then(response => response.json());
    }
    SaveQ10 = async e =>{
        const requestOptions1 = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ variableId: '10' , data: this.state.Q10 , reportId: this.state.inheritedRoutine})
        };
        console.log(requestOptions1)
        fetch('http://localhost:8090/sertresreporte/variabledata/save', requestOptions1)
            .then(response => response.json());
    }
    SaveQ11 = async e =>{
        const requestOptions1 = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ variableId: '11' , data: this.state.Q11 , reportId: this.state.inheritedRoutine})
        };
        console.log(requestOptions1)
        fetch('http://localhost:8090/sertresreporte/variabledata/save', requestOptions1)
            .then(response => response.json());
    }
    SaveQ12 = async e =>{
        const requestOptions1 = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ variableId: '12' , data: this.state.Q12 , reportId: this.state.inheritedRoutine})
        };
        console.log(requestOptions1)
        fetch('http://localhost:8090/sertresreporte/variabledata/save', requestOptions1)
            .then(response => response.json());
    }
    SaveQ13 = async e =>{
        const requestOptions1 = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ variableId: '13' , data: this.state.Q13 , reportId: this.state.inheritedRoutine})
        };
        console.log(requestOptions1)
        fetch('http://localhost:8090/sertresreporte/variabledata/save', requestOptions1)
            .then(response => response.json());
    }
    SaveQ14 = async e =>{
        const requestOptions1 = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ variableId: '14' , data: this.state.Q14 , reportId: this.state.inheritedRoutine})
        };
        console.log(requestOptions1)
        fetch('http://localhost:8090/sertresreporte/variabledata/save', requestOptions1)
            .then(response => response.json());
    }
    SaveQ15 = async e =>{
        const requestOptions1 = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ variableId: '15' , data: this.state.Q15 , reportId: this.state.inheritedRoutine})
        };
        console.log(requestOptions1)
        fetch('http://localhost:8090/sertresreporte/variabledata/save', requestOptions1)
            .then(response => response.json());
    }
    SaveQ16 = async e =>{
        const requestOptions1 = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ variableId: '16' , data: this.state.Q16 , reportId: this.state.inheritedRoutine})
        };
        console.log(requestOptions1)
        fetch('http://localhost:8090/sertresreporte/variabledata/save', requestOptions1)
            .then(response => response.json());
    }
    SaveQ17 = async e =>{
        const requestOptions1 = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ variableId: '17' , data: this.state.Q17 , reportId: this.state.inheritedRoutine})
        };
        console.log(requestOptions1)
        fetch('http://localhost:8090/sertresreporte/variabledata/save', requestOptions1)
            .then(response => response.json());
    }
    SaveQ18 = async e =>{
        const requestOptions1 = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ variableId: '18' , data: this.state.Q18 , reportId: this.state.inheritedRoutine})
        };
        console.log(requestOptions1)
        fetch('http://localhost:8090/sertresreporte/variabledata/save', requestOptions1)
            .then(response => response.json());
    }
    SaveQ19 = async e =>{
        const requestOptions1 = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ variableId: '19' , data: this.state.Q19 , reportId: this.state.inheritedRoutine})
        };
        console.log(requestOptions1)
        fetch('http://localhost:8090/sertresreporte/variabledata/save', requestOptions1)
            .then(response => response.json());
    }
    

    render(){
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
        const {Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9,Q10,Q11,Q12,Q13,Q14,Q15,Q16,Q17,Q18,Q19} = this.state  
        return(
        <React.Fragment>
             <form onSubmit={this.submitHadler}>
            <div className="ContenedorP">
                {/* {this.state.variableAUX.map((item) => ( */}
                        <div className="table table-dark overflow-hidden">
                        <div className="row">
                        
                        {/* solo si esta con status completo */}
                        
                            <div className="col-4 col-sm-4">
                                    <table className="AAData">
                                    <tr>
                                    {this.state.statusActual?
                                        <td className="prestoAAC">{this.state.variableAUX[0]}</td>
                                        :<td className="prestoAA">{this.state.variableAUX[0]}</td>}
                                        {this.state.statusActual?
                                        <td className="prestoAAResC">{this.state.inheritedRoutineData1[0]}</td>
                                        :<td className="prestoAARes"><input type="dateTime" disabled= "true" size="15" value={this.state.now} className="btn btn-outline-info"/></td>}
                                    </tr>
                                    </table> 
                                   
                            </div>
                            <div className="w-100 ocultar-div"></div>
                            <div className="col-4 col-sm-4">
                            <table className="AAData">
                                    <tr>
                                    {this.state.statusActual?
                                        <td className="prestoAAC">{this.state.variableAUX[1]}</td>
                                        :<td className="prestoAA">{this.state.variableAUX[1]}</td>}
                                        {this.state.statusActual?
                                        <td className="prestoAAResC">{this.state.inheritedRoutineData1[1]}</td>
                                        : <td className="prestoAARes"><select  onChange={this.changeHadlerQ2} value={Q2} className="btn btn-outline-info">
                                        <option value={''}> </option>
                                        <option value={'si'}>Si</option>
                                        <option value={'no'}>No</option>
                                        <option value={'No aplica'}>No Aplica</option>
                                        </select></td>}    
                                    </tr>
                                    </table>
                            </div>
                            
                            <div class="w-100"></div>{/* segunda linea de cuadro Rutina */}
                            
                            <div className="col-4 col-sm-4">
                            <table className="AAData"> 
                                    <tr>
                                    {this.state.statusActual?
                                        <td className="prestoAAC">{this.state.variableAUX[2]}</td>
                                        :<td className="prestoAA">{this.state.variableAUX[2]}</td>}
                                        {this.state.statusActual?
                                        <td className="prestoAAResC">{this.state.inheritedRoutineData1[2]}</td>
                                        :<td className="prestoAARes"><select  onChange={this.changeHadlerQ3} value={Q3} className="btn btn-outline-info">
                                        <option value={''}> </option>
                                            <option value={'si'}>Si</option>
                                            <option value={'no'}>No</option>
                                            <option value={'No aplica'}>No Aplica</option>
                                            </select></td>}
                                    </tr>
                                    </table> 
                            </div>
                            <div className="w-100 ocultar-div"></div>
                            <div className="col-4 col-sm-4">
                            <table className="AAData">
                                    <tr>
                                    {this.state.statusActual?
                                        <td className="prestoAAC">{this.state.variableAUX[3]}</td>
                                        :<td className="prestoAA">{this.state.variableAUX[3]}</td>}
                                        {this.state.statusActual?
                                        <td className="prestoAAResC">{this.state.inheritedRoutineData1[3]}</td>
                                        :<td className="prestoAARes"><select  onChange={this.changeHadlerQ4} value={Q4} className="btn btn-outline-info">
                                        <option value={''}> </option>
                                            <option value={'si'}>Si</option>
                                            <option value={'no'}>No</option>
                                            <option value={'No aplica'}>No Aplica</option>
                                            </select></td>}
                                    </tr>
                                    </table>
                            </div>
                            <div className="w-100 ocultar-div"></div>
                            <div className="col-4 col-sm-4 AAData">
                            <table className="AAData">
                                    <tr>
                                    {this.state.statusActual?
                                        <td className="prestoAAC">{this.state.variableAUX[4]}</td>
                                        :<td className="prestoAA">{this.state.variableAUX[4]}</td>}
                                        {this.state.statusActual?
                                        <td className="prestoAAResC">{this.state.inheritedRoutineData1[4]}</td>
                                        :<td className="prestoAARes"><select  onChange={this.changeHadlerQ5} value={Q5} className="btn btn-outline-info">
                                        <option value={''}> </option>
                                            <option value={'si'}>Si</option>
                                            <option value={'no'}>No</option>
                                            <option value={'No aplica'}>No Aplica</option>
                                            </select></td>}
                                    </tr>
                                    </table>
                            </div>
                            <div class="w-100"></div>{/* tercera linea de cuadro Rutina */}
                            
                            <div className="col-4 col-sm-4">
                            <table className="AAData"> 
                                    <tr>
                                    {this.state.statusActual?
                                        <td className="prestoAAC">{this.state.variableAUX[5]}</td>
                                        :<td className="prestoAA">{this.state.variableAUX[5]}</td>}
                                        {this.state.statusActual?
                                        <td className="prestoAAResC">{this.state.inheritedRoutineData1[5]}</td>
                                        :<td className="prestoAARes"><select  onChange={this.changeHadlerQ6} value={Q6} className="btn btn-outline-info">
                                        <option value={''}> </option>
                                            <option value={'si'}>Si</option>
                                            <option value={'no'}>No</option>
                                            <option value={'No aplica'}>No Aplica</option>
                                            </select></td>}
                                    </tr>
                                    </table> 
                            </div>
                            <div className="w-100 ocultar-div"></div>
                            <div className="col-4 col-sm-4">
                            <table className="AAData">
                                    <tr>
                                    {this.state.statusActual?
                                        <td className="prestoAAC">{this.state.variableAUX[6]}</td>
                                        :<td className="prestoAA">{this.state.variableAUX[6]}</td>}
                                        {this.state.statusActual?
                                        <td className="prestoAAResC">{this.state.inheritedRoutineData1[6]}</td>
                                        :<td className="prestoAARes"><select  onChange={this.changeHadlerQ7} value={Q7} className="btn btn-outline-info">
                                        <option value={''}> </option>
                                            <option value={'si'}>Si</option>
                                            <option value={'no'}>No</option>
                                            <option value={'No aplica'}>No Aplica</option>
                                            </select></td>}
                                    </tr>
                                </table>
                            </div>
                            <div className="w-100 ocultar-div"></div>
                            <div className="col-4 col-sm-4">
                            <table className="AAData">
                                    <tr>
                                    {this.state.statusActual?
                                        <td className="prestoAAC">{this.state.variableAUX[7]}</td>
                                        :<td className="prestoAA">{this.state.variableAUX[7]}</td>}
                                        {this.state.statusActual?
                                        <td className="prestoAAResC">{this.state.inheritedRoutineData1[7]}</td>
                                        :<td className="prestoAARes"><select  onChange={this.changeHadlerQ8} value={Q8} className="btn btn-outline-info">
                                        <option value={''}> </option>
                                            <option value={'si'}>Si</option>
                                            <option value={'no'}>No</option>
                                            <option value={'No aplica'}>No Aplica</option>
                                            </select></td>}
                                    </tr>
                                </table>
                            </div>
                            <div class="w-100"></div>{/* cuarta linea de cuadro Rutina */}
                            
                            <div className="col-4 col-sm-4">
                            <table className="AAData"> 
                                    <tr>
                                    {this.state.statusActual?
                                        <td className="prestoAAC">{this.state.variableAUX[8]}</td>
                                        :<td className="prestoAA">{this.state.variableAUX[8]}</td>}
                                        {this.state.statusActual?
                                        <td className="prestoAAResC">{this.state.inheritedRoutineData1[8]}</td>
                                        :<td className="prestoAARes"><input type="text" size="7" onChange={this.changeHadlerQ9} value={Q9} autoComplete="off" className="btn btn-outline-info"></input></td>
                                        }</tr>
                                    </table> 
                            </div>
                            <div className="w-100 ocultar-div"></div>
                            <div className="col-4 col-sm-4">
                            <table className="AAData">
                                    <tr>
                                    {this.state.statusActual?
                                        <td className="prestoAAC">{this.state.variableAUX[9]}</td>
                                        :<td className="prestoAA">{this.state.variableAUX[9]}</td>}
                                        {this.state.statusActual?
                                        <td className="prestoAAResC">{this.state.inheritedRoutineData1[9]}</td>
                                        :<td className="prestoAARes"><input type="text" size="7" onChange={this.changeHadlerQ10} autoComplete="off" value={Q10} className="btn btn-outline-info"></input></td>
                                        }</tr>
                                </table>
                            </div>
                            <div className="w-100 ocultar-div"></div>
                            <div className="col-4 col-sm-4">
                            <table className="AAData">
                                    <tr>
                                    {this.state.statusActual?
                                        <td className="prestoAAC">{this.state.variableAUX[10]}</td>
                                        :<td className="prestoAA">{this.state.variableAUX[10]}</td>}
                                        {this.state.statusActual?
                                        <td className="prestoAAResC">{this.state.inheritedRoutineData1[10]}</td>
                                        :<td className="prestoAARes"><input type="text" size="7" onChange={this.changeHadlerQ11} autoComplete="off" value={Q11} className="btn btn-outline-info"></input></td>
                                    }
                                    </tr>
                                </table>
                            </div>

                            <div class="w-100"></div>{/* quinta linea de cuadro Rutina */}
                            
                            <div className="col-4 col-sm-4">
                            <table className="AAData"> 
                                    <tr>
                                    {this.state.statusActual?
                                        <td className="prestoAAC">{this.state.variableAUX[11]}</td>
                                        :<td className="prestoAA">{this.state.variableAUX[11]}</td>}
                                        {this.state.statusActual?
                                        <td className="prestoAAResC">{this.state.inheritedRoutineData1[11]}</td>
                                        :<td className="prestoAARes"><input type="text" size="7" onChange={this.changeHadlerQ12} autoComplete="off" value={Q12} className="btn btn-outline-info"></input></td>
                                        }
                                        </tr>
                                    </table> 
                            </div>
                            <div className="w-100 ocultar-div"></div>
                            <div className="col-4 col-sm-4">
                            <table className="AAData">
                                    <tr>
                                    {this.state.statusActual?
                                        <td className="prestoAAC">{this.state.variableAUX[12]}</td>
                                        :<td className="prestoAA">{this.state.variableAUX[12]}</td>}
                                        {this.state.statusActual?
                                        <td className="prestoAAResC">{this.state.inheritedRoutineData1[12]}</td>
                                        :<td className="prestoAARes"><input type="text" size="7" onChange={this.changeHadlerQ13} autoComplete="off" value={Q13} className="btn btn-outline-info"></input></td>
                                    }
                                    </tr>
                                </table>
                            </div>
                            <div className="w-100 ocultar-div"></div>
                            <div className="col-4 col-sm-4">
                            <table className="AAData">
                                    <tr>
                                    {this.state.statusActual?
                                        <td className="prestoAAC">{this.state.variableAUX[13]}</td>
                                        :<td className="prestoAA">{this.state.variableAUX[13]}</td>}
                                        {this.state.statusActual?
                                        <td className="prestoAAResC">{this.state.inheritedRoutineData1[13]}</td>
                                        :<td className="prestoAARes"><input type="text" size="7"  onChange={this.changeHadlerQ14} autoComplete="off" value={Q14} className="btn btn-outline-info"></input></td>
                                    }
                                    </tr>
                                </table>
                            </div>

                            <div class="w-100"></div>{/* sexta linea de cuadro Rutina */}
                            
                            <div className="col-4 col-sm-4">
                            <table className="AAData"> 
                                    <tr>
                                    {this.state.statusActual?
                                        <td className="prestoAAC">{this.state.variableAUX[14]}</td>
                                        :<td className="prestoAA">{this.state.variableAUX[14]}</td>}
                                        {this.state.statusActual?
                                        <td className="prestoAAResC">{this.state.inheritedRoutineData1[14]}</td>
                                        :<td className="prestoAARes"><input type="text" size="7"  onChange={this.changeHadlerQ15} autoComplete="off" value={Q15} className="btn btn-outline-info"></input></td>
                                    }
                                    </tr>
                                    </table> 
                            </div>
                            <div className="w-100 ocultar-div"></div>
                            <div className="col-4 col-sm-4">
                            <table className="AAData">
                                    <tr>
                                    {this.state.statusActual?
                                        <td className="prestoAAC">{this.state.variableAUX[15]}</td>
                                        :<td className="prestoAA">{this.state.variableAUX[15]}</td>}
                                        {this.state.statusActual?
                                        <td className="prestoAAResC">{this.state.inheritedRoutineData1[15]}</td>
                                        :<td><input type="text" size="7"  onChange={this.changeHadlerQ16} autoComplete="off" value={Q16} className="btn btn-outline-info"></input></td>
                                    }
                                    </tr>
                                </table>
                            </div>
                            <div className="w-100 ocultar-div"></div>
                            <div className="col-4 col-sm-4">
                            <table className="AAData">
                                    <tr>
                                    {this.state.statusActual?
                                        <td className="prestoAAC">{this.state.variableAUX[16]}</td>
                                        :<td className="prestoAA">{this.state.variableAUX[16]}</td>}
                                        {this.state.statusActual?
                                        <td className="prestoAAResC">{this.state.inheritedRoutineData1[16]}</td>
                                        :<td className="prestoAARes"><select  onChange={this.changeHadlerQ17} value={Q17} className="btn btn-outline-info">
                                            <option value={''}> </option>
                                            <option value={'Si'}>Si</option>
                                            <option value={'No'}>No</option>
                                            </select></td>}
                                    </tr>
                                </table>
                            </div>

                           < div class="w-100"></div>{/* septima linea de cuadro Rutina */}
                            
                            <div className="col-4 col-sm-4">
                            <table className="AAData"> 
                                    <tr>
                                    {this.state.statusActual?
                                        <td className="prestoAAC">{this.state.variableAUX[17]}</td>
                                        :<td className="prestoAA">{this.state.variableAUX[17]}</td>}
                                        {this.state.statusActual?
                                        <td className="prestoAAResC ">{this.state.inheritedRoutineData1[17]}</td>
                                        :<td className="prestoAARes"><select onChange={this.changeHadlerQ18} value={Q18} className="btn btn-outline-info">
                                        <option value={''}> </option>
                                            <option value={'Si'}>Si</option>
                                            <option value={'No'}>No</option>
                                            </select></td>}
                                    </tr>
                                    </table> 
                            </div>
                            <div className="w-100 ocultar-div"></div>
                            <div className="col-4 col-sm-4">
                            <table className="AAData">
                                    <tr>
                                    {this.state.statusActual?
                                        <td className="prestoAAC">{this.state.variableAUX[18]}</td>
                                        :<td className="prestoAA">{this.state.variableAUX[18]}</td>}
                                    {this.state.statusActual?
                                        <td className="prestoAAResC">{this.state.inheritedRoutineData1[18]}</td>
                                        :<td className="prestoAARes"><input type="text" onChange={this.changeHadlerQ19} autoComplete="off" value={Q19} className="btn btn-outline-info"></input></td>
                                    }
                                    </tr>
                                </table>
                            </div>

                            < div class="w-100"></div>{/* octava linea de cuadro Rutina */}

                            <div className="w-100 ocultar-div"></div>
                            <div className="col-4 col-sm-4">
                            <table className="AAData">
                                    <tr>
                                    {this.state.statusActual?
                                        <td><button className="btn btn-outline-success" disabled="true">Completo</button></td>
                                        :<td><button className="btn btn-outline-info">Guardar</button></td>
                                    }
                                    </tr>
                                </table>
                            </div>
                            

                        </div>     
                    </div>
                {/* ))} */}
            </div>
            </form>
        </React.Fragment>
    );
}
}

export default variableAA;