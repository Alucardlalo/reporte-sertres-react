import React, {useState}from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import '../styles/ReportTypeTableAll.css';
import * as moment from "moment/moment";

class RoutineTableAll extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            reports : [],
            loading: true,
            error: null,
            selectRoutinebtn: false,
            routineSelect: [],
            routineselectId: '',
            //state de seleccion de rutina
            showMeRutina: true,
            showMeDispositivo: false,
            showMeEdificio: false,
            showMeDatosRutina: false,

        }
        this.selectroutineA = this.selectroutineA.bind(this);
    }

    componentDidMount() {
        this.fetchReport()
    }
    

    selectRoutine(){
            this.setState({selectRoutine: true });
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

    selectroutineA(e){
        this.setState({selectRoutinebtn: false , routineselectId: 'http://localhost:8090/sertresreporte/reporte/'+ e.target.value})
    this.fetchRoutineSelect();
    }

    fetchRoutineSelect = async () =>{
        this.setState({loading:true, error: null })
       
        try{
            const response = await fetch(this.state.routineselectId)
            const routine = await response.json();
            this.setState({loading:false , routineSelect: routine , selectRoutinebtn: true })

        }catch(error){
            this.setState({loading: false , error: null })
        }
    }

    operation1(){
        this.setState({
            showMeRutina:!this.state.showMeRutina,
            showMeDispositivo: false,
            showMeEdificio: false,
            showMeDatosRutina:false,
        })
    }
    operation2(){
        this.setState({
            showMeRutina:false,
            showMeDispositivo: !this.state.showMeDispositivo,
            showMeEdificio: false,
            showMeDatosRutina:false,
        })
    }
    operation3(){
        this.setState({
            showMeRutina:false,
            showMeDispositivo: false,
            showMeEdificio: !this.state.showMeEdificio,
            showMeDatosRutina:false,
        })
    }
    operation4(){
        this.setState({
            showMeRutina:false,
            showMeDispositivo: false,
            showMeEdificio: false,
            showMeDatosRutina:!this.state.showMeDatosRutina,
        })
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
        if(this.state.selectRoutinebtn === false){   
        return(
                <React.Fragment>
                    <div className="container">
                        <h3 className="tableName">Rutinas</h3>
                        <p className="tableName">Rutinas existentes</p>
                        <a href="/Routine/new" className="buttons"> Nueva Rutina</a>
                        <div className="table-responsive">
                            <table className="table table-dark">
                                <thead>
                                <tr>
                                    <th></th>
                                    <th>#</th>
                                    <th>Tipo Reporte</th>
                                    <th>Dispositivo</th>
                                    <th>Nombre</th>
                                    <th>Fecha Compromiso</th>
                                    <th>Fecha Inicio</th>
                                    <th>Fecha Fin</th>
                                    <th>Estatus</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.reports.sort(({reportId: previousreportId}, {reportId:currentreportId})=> currentreportId - previousreportId).map((item) => (
                                    <tr key={item.reportId}>
                                        <td style={{textAlign:"center"}}><button className="btn btn-outline-info" onClick={this.selectroutineA} value={item.reportId}>Ver</button></td>
                                        <td>{item.reportId}</td>
                                        <td style={{textAlign:"left"}}>{item.reportType.reportType}</td>
                                        <td>{item.deviceId}</td>
                                        <td style={{textAlign:"left"}}>{item.reportTittle}</td>
                                        <td>{moment(item.commitmentDate).format('DD - MMM - YYYY')}</td>
                                        <td>{moment(item.beginDate).format('DD - MMM - YYYY')}</td>
                                        <td>{moment(item.endDate).format('DD - MMM - YYYY')}</td>
                                        <td style={{textAlign:"left"}}>{item.reportStatusRel.reportStatusDesc}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </React.Fragment>
            );}//fin del if
            {/* seccion de selecion de rutina */}
        if(this.state.selectRoutinebtn === true){
            return(
                <React.Fragment>
                   <div className="container">
                    <div className="container-fluid">
                    <div>
                        <div className="container botonesNombre">
                            <button type="button" className="btn btn-dark" data-target="#Rutina"
                                     onClick={() => this.operation1()}>Rutina
                            </button>--
                            <button type="button" className="btn btn-dark" data-target="#Dispositivo"
                                     onClick={() => this.operation2()}>Dispositivo
                            </button>--
                            <button type="button" className="btn btn-dark" data-target="#Edificio"
                                     onClick={() => this.operation3()}>Edificio
                            </button>--
                            <button type="button" className="btn btn-dark" data-target="#DatosRutina"
                                     onClick={() => this.operation4()}>Datos Rutina
                            </button><br/><br/>
                            

                            {this.state.showMeRutina?
                            <div>
                                <div className="container-fluid">
                                <div className="table-responsive-sm">
                            
                                {this.state.routineSelect.map((item) => (
                                    <div className="table table-dark">
                                    <div><h2 className="Rutinatitle">{item.reportType.reportType}</h2></div>
                                    <div className="row">
                                        <div className="col-6 col-sm-6">
                                               <table className="sm-info">
                                                <tr>
                                                    <td className="presto">Id Rutina: </td>
                                                    <td>{item.reportId}</td> 
                                                </tr>
                                                </table> 
                                        </div>
                                        <div className="w-100 ocultar-div"></div>
                                        <div className="col-6 col-sm-6">
                                        <table className="sm-info">
                                                <tr>
                                                    <td className="presto">Tipo de Rutina: </td>
                                                    <td>{item.reportType.reportType}</td>
                                                </tr>
                                                </table>
                                        </div>
                                      
                                        <div class="w-100"></div>{/* segunda linea de cuadro Rutina */}
                                        
                                        <div className="col-6 col-sm-3">
                                        <table className="sm-info"> 
                                                <tr>
                                                    <td className="presto">Estado de Rutina: </td>
                                                    <td>{item.reportStatusRel.reportStatusDesc}</td>
                                                </tr>
                                                </table> 
                                        </div>
                                        <div className="w-100 ocultar-div"></div>
                                        <div className="col-6 col-sm-3">
                                        <table className="sm-info">
                                                <tr>
                                                    <td className="presto">Nombre Rutina: </td>
                                                    <td>{item.reportTittle}</td>
                                                </tr>
                                                </table>
                                        </div>
                                        <div className="w-100 ocultar-div"></div>
                                        <div className="col-6 col-sm-3 sm-info">
                                        <table className="sm-info">
                                                <tr>
                                                    <td className="presto">Fecha Compromiso: </td>
                                                    <td>{moment(item.commitmentDate).format('DD/MMM/YYYY hh:mm:ss')}</td>
                                                </tr>
                                                </table>
                                        </div>
                                        <div class="w-100"></div>{/* tercera linea de cuadro Rutina */}
                                        
                                        <div className="col-6 col-sm-3">
                                        <table className="sm-info"> 
                                                <tr>
                                                    <td className="presto">Fecha Inicio: </td>
                                                    <td>{moment(item.beginDate).format('DD/MMM/YYYY hh:mm:ss')}</td>
                                                </tr>
                                                </table> 
                                        </div>
                                        <div className="w-100 ocultar-div"></div>
                                        <div className="col-6 col-sm-3">
                                        <table className="sm-info">
                                                <tr>
                                                    <td className="presto">Fecha Culminación: </td>
                                                    <td>{moment(item.endDate).format('DD/MMM/YYYY hh:mm:ss')}</td>
                                                </tr>
                                          </table>
                                        </div>
                                        <div className="w-100 ocultar-div"></div>
                                        <div className="col-6 col-sm-3">
                                        <table className="sm-info">
                                                <tr>
                                                    <td className="presto">Id Dispositivo: </td>
                                                    <td>{item.deviceId}</td>
                                                </tr>
                                         </table>
                                        </div>
                                    
                                   </div>     
                                </div>
                            ))}
                        </div>
                                </div>
                            </div>
                             :null}

                            {this.state.showMeDispositivo?
                            <div>
                                <div className="container-fluid">
                                <div className="table-responsive-sm">
                            
                                {this.state.routineSelect.map((item) => (
                                  <div className="table table-dark">
                                  <div><h2 className="Rutinatitle">Dispositivo</h2></div>
                                  <div className="row">
                                      <div className="col-6 col-sm-6">
                                             <table className="sm-info">
                                              <tr>
                                                  <td className="presto">imagen dispositivo </td> 
                                              </tr>
                                              </table> 
                                      </div>
                                      <div className="w-100 ocultar-div"></div>
                                      <div className="col-6 col-sm-6">
                                      <table className="sm-info">
                                              <tr>
                                                  <td className="presto">Id Dispositivo </td>
                                                  <td>{item.deviceId}</td>
                                              </tr>
                                              </table>
                                      </div>
                                    
                                      <div class="w-100"></div>{/* segunda linea de cuadro Dispositivo */}
                                      
                                      <div className="col-6 col-sm-3">
                                      <table className="sm-info"> 
                                              <tr>
                                                  <td className="presto">Nombre Dispositivo </td>
                                                  <td>{item.deviceRel.deviceName}</td>
                                              </tr>
                                              </table> 
                                      </div>
                                      <div className="w-100 ocultar-div"></div>
                                      <div className="col-6 col-sm-3">
                                      <table className="sm-info">
                                              <tr>
                                                  <td className="presto">Tipo Dispositivo: </td>
                                                  <td>{item.deviceRel.deviceType}</td>
                                              </tr>
                                              </table>
                                      </div>
                                      <div className="w-100 ocultar-div"></div>
                                      <div className="col-6 col-sm-3 sm-info">
                                      <table className="sm-info">
                                              <tr>
                                                  <td className="presto">Descripción Dispositivo: </td>
                                                  <td>{item.deviceRel.deviceDescription}</td>
                                              </tr>
                                              </table>
                                      </div>
                                      <div class="w-100"></div>{/* tercera linea de cuadro Dispositivo */}
                                      
                                      <div className="col-6 col-sm-3">
                                      <table className="sm-info"> 
                                              <tr>
                                                  <td className="presto">Marca Dispositivo: </td>
                                                  <td>{item.deviceRel.deviceBrand}</td>
                                              </tr>
                                              </table> 
                                      </div>
                                      <div className="w-100 ocultar-div"></div>
                                      <div className="col-6 col-sm-3">
                                      <table className="sm-info">
                                              <tr>
                                                  <td className="presto">Modelo Dispositivo: </td>
                                                  <td>{item.deviceRel.deviceModel}</td>
                                              </tr>
                                        </table>
                                      </div>
                                      <div className="w-100 ocultar-div"></div>
                                      <div className="col-6 col-sm-3">
                                      <table className="sm-info">
                                              <tr>
                                                  <td className="presto">Serie Dispositivo: </td>
                                                  <td>{item.deviceRel.deviceSeries}</td>
                                              </tr>
                                       </table>
                                      </div>
                                      <div class="w-100"></div>{/* cuarta linea de cuadro Dispositivo */}
                                      
                                      <div className="col-6 col-sm-3">
                                      <table className="sm-info"> 
                                             <table>
                                              <tr>
                                                  <td className="presto">Id Edificio: </td>
                                                  <td>{item.deviceRel.building}</td>
                                              </tr>
                                              </table> 
                                          </table>
                                      </div>
                                      <div className="w-100 ocultar-div"></div>
                                      <div className="col-6 col-sm-3">
                                      <table className="sm-info">
                                              <tr>
                                                  <td className="presto">Estado Dispositivo: </td>
                                                  <td>{item.deviceRel.deviceStatusRel.deviceStatusDescription}</td>
                                              </tr>
                                        </table>
                                      </div>
                                      <div className="w-100 ocultar-div"></div>
                                      <div className="col-6 col-sm-3">
                                      <table className="sm-info">
                                              <tr>
                                                  <td className="presto">Ultima fecha de Estado: </td>
                                                  <td>{item.deviceRel.lastDateStatus}</td>
                                              </tr>
                                       </table>
                                      </div>
                                 </div>     
                              </div>  
                            ))}
                        </div>
                                </div>
                            </div>
                             :null}

                            {this.state.showMeEdificio?
                            <div>
                                <div className="container-fluid">
                                <div className="table-responsive-sm">
                            
                                {this.state.routineSelect.map((item) => (
                                    <div className="table table-dark">
                                        <div><h2 className="Rutinatitle">Edificio</h2></div>
                                        <div className="row">
                                            <div className="col-6 col-sm-3">
                                                   <table className="sm-info">
                                                    <tr>
                                                        <td className="presto">Id Edificio: </td>
                                                        <td>{item.deviceRel.building}</td>
                                                    </tr>
                                                    </table> 
                                            </div>
                                            <div className="w-100 ocultar-div"></div>
                                            <div className="col-6 col-sm-3">
                                            <table className="sm-info">
                                                    <tr>
                                                        <td className="presto">Tipo de Edificio: </td>
                                                        <td>{item.deviceRel.buildingRel.buildingType}</td>
                                                    </tr>
                                                    </table>
                                            </div>
                                            <div className="w-100 ocultar-div"></div>
                                            <div className="col-6 col-sm-3">
                                            <table className="sm-info">
                                                    <tr>
                                                        <td className="presto">Responsable de Edificio: </td>
                                                        <td>{item.deviceRel.buildingRel.buildingDataRel.buildingDataResponsable}</td>
                                                    </tr>
                                                    </table>
                                            </div>

                                            <div class="w-100"></div>{/* segunda linea de cuadro edificio */}
                                            
                                            <div className="col-6 col-sm-3">
                                                   <table className="sm-info">
                                                    <tr>
                                                        <td className="presto">Segundo Contacto: </td>
                                                        <td>{item.deviceRel.buildingRel.buildingDataRel.buildingDataSecondContact}</td>
                                                    </tr>
                                                    </table> 
                                            </div>
                                            <div className="w-100 ocultar-div"></div>
                                            <div className="col-6 col-sm-3">
                                            <table className="sm-info">
                                                    <tr>
                                                        <td className="presto">Provedor: </td>
                                                        <td>{item.deviceRel.buildingRel.buildingDataRel.buildingDataProvider}</td>
                                                    </tr>
                                                    </table>
                                            </div>
                                            <div className="w-100 ocultar-div"></div>
                                            <div className="col-6 col-sm-3">
                                            <table className="sm-info">
                                                    <tr>
                                                        <td className="presto">Ciudad: </td>
                                                        <td>{item.deviceRel.buildingRel.buildingDataRel.buildingDataCity}</td>
                                                    </tr>
                                                    </table>
                                            </div>
                                            <div class="w-100"></div>{/* tercera linea de cuadro edificio */}
                                            
                                            <div className="col-6 col-sm-3">
                                            <table className="sm-info"> 
                                                   <table>
                                                    <tr>
                                                        <td className="presto">Estado: </td>
                                                        <td>{item.deviceRel.buildingRel.buildingDataRel.buildingDataState}</td>
                                                    </tr>
                                                    </table> 
                                                </table>
                                            </div>
                                            <div className="w-100 ocultar-div"></div>
                                            <div className="col-6 col-sm-3">
                                            <table className="sm-info">
                                                    <tr>
                                                        <td className="presto">Calle: </td>
                                                        <td>{item.deviceRel.buildingRel.buildingDataRel.buildingDataStreet}</td>
                                                    </tr>
                                                    </table>
                                            </div>
                                            <div className="w-100 ocultar-div"></div>
                                            <div className="col-6 col-sm-3">
                                            <table className="sm-info">
                                                    <tr>
                                                        <td className="presto">CP: </td>
                                                        <td>{item.deviceRel.buildingRel.buildingDataRel.buildingDataCP}</td>
                                                    </tr>
                                                    </table>
                                            </div>
                                       </div>     
                                    </div>
                            ))}
                        </div>
                                </div>
                            </div>
                             :null}

                            {this.state.showMeDatosRutina?
                            <div>
                                <div className="container-fluid">
                                    <h1 className="titleMain">datos referentes a las respuestas de reporte para ver y editar</h1>
                                </div>
                            </div>
                            :null}
                        </div>
                    </div>
                </div>
                   </div>
                </React.Fragment>
            );
        }    
    }

}


export default RoutineTableAll;