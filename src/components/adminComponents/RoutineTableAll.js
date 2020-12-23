import React from 'react';
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
            //state para automatizacion de rutinas
            dispo: '',
            fechaDispo: '',
            status: '',
            reporttype:'',
            routine: '',
            routinetitle: '',
            atm: false,
            pruebaexistenciaState: '',

        }
    }

    componentDidMount() {
        this.fetchReport()

    }

    rutinaATM(){
        const now = moment();
        while(this.state.atm === false){
            var /*auxiliar1 = [], auxiliarfecha = [],*/pruebaexistencia = [];
                for (var i = 0; i <= 100; i++){
                     const dispositivoselect = this.state.dispo.lastIndexOf(i);
                     const fechainiciorutina = this.state.fechaDispo[dispositivoselect];
                     const diferenciafechas = now.diff(fechainiciorutina,'days');

           if(diferenciafechas <= 15 && diferenciafechas >= 1) {
               const routine = this.state.routine[dispositivoselect];
               const routineType = this.state.reporttype[dispositivoselect];
               const routineName = this.state.routinetitle[dispositivoselect];
               const dispositivo = this.state.dispo[dispositivoselect];
               const fechainicioroutine = this.state.fechaDispo[dispositivoselect];

               /*
               console.log('routine ' + routine + ' routinetype ' + routineType + ' nombre routine ' + routineName
                   + ' dispositivo ' + dispositivo + ' fecha inicio ' + fechainicioroutine.format('DD/MM/YYYY'));
              */
               {
                   const requestOptions = {
                       method: 'POST',
                       headers: {'Content-Type': 'application/json'},
                       body: JSON.stringify({
                           reportId: routine,
                           reportTypeId: routineType,
                           deviceId: dispositivo,
                           reportTittle: routineName,
                           commitmentDate: "",
                           beginDate: fechainicioroutine.format('DD/MM/YYYY'),
                           endDate: "",
                           status: 2
                       })
                   };
                  // console.log(requestOptions)
                   fetch('http://localhost:8090/sertresreporte/reporte/save', requestOptions)
                       .then(response => response.json());
               }
               pruebaexistencia.push(i);//agregaa los dispositivos existentes
               this.setState({pruebaexistenciaState:pruebaexistencia})
              // console.log('prueba existencia '+pruebaexistencia);

           }else
               if(diferenciafechas >= 16 ){
               const routineTypeD15 = this.state.reporttype[dispositivoselect];
               const routineNameD15 = this.state.routinetitle[dispositivoselect];
               const dispositivoD15 = this.state.dispo[dispositivoselect];

             /*  console.log('routineD15 ' + routineD15 + ' routinetypeD15 ' + routineTypeD15 + ' nombre routineD15 ' + routineNameD15
                   + ' dispositivoD15 ' + dispositivoD15 + ' fecha inicioD15 ' + fechainicioroutineD15.format('DD/MM/YYYY'));
*/
               {
                   const requestOptions = {
                       method: 'POST',
                       headers: {'Content-Type': 'application/json'},
                       body: JSON.stringify({

                           reportTypeId: routineTypeD15,
                           deviceId: dispositivoD15,
                           reportTittle: routineNameD15,
                           commitmentDate: "",
                           beginDate: now.format('DD/MM/YYYY'),
                           endDate: "",
                           status: 2

                       })
                   };
                   //console.log(requestOptions)
                   fetch('http://localhost:8090/sertresreporte/reporte/save', requestOptions)
                       .then(response => response.json());
               }
               pruebaexistencia.push(i);//agregaa los dispositivos existentes
               this.setState({pruebaexistenciaState:pruebaexistencia})
               console.log('prueba existencia '+pruebaexistencia);
           }//fin de segundo if
             else{
               this.setState({atm:true})
           }
           }//fin de for
         }//fin del while
    }//fin de la funcion

    fetchReport = async () =>{
        this.setState({loading:true, error: null })

        try{
            const response = await fetch('http://localhost:8090/sertresreporte/reporte/all')
            const reports = await response.json();
            this.setState({loading:false , reports: reports })
            //auxiliares para los reporte
            var dispositivos = [] , fechas = [], status = [], routine = [],reportType = [],routinetitle = [];
            this.state.reports.map((item) =>{
                dispositivos.push(item.deviceId);
                fechas.push(moment(item.beginDate));
                status.push(item.status);
                routine.push(item.reportId);
                reportType.push(item.reportTypeId);
                routinetitle.push(item.reportTittle);
            })
            this.setState({dispo:dispositivos , fechaDispo: fechas, status: status,  reporttype: reportType, routine: routine, routinetitle: routinetitle })
            this.rutinaATM();
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
                    <h3 className="tableName">Rutinas</h3>
                    <p className="tableName">Rutinas existentes</p>
                    <a href="/Routine/new" className="buttons"> Nueva Rutina</a>
                    <div className="table-responsive-sm">
                        <table className="table table-dark">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Tipo Reporte</th>
                                <th>Dispositivo</th>
                                <th>Nombre</th>
                                {/*<th>Fecha Compromiso</th>*/}
                                <th>Fecha Inicio</th>
                                <th>Fecha Fin</th>
                                <th>Estatus</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.reports.map((item) => (
                                <tr key={item.reportId} style={{textAlign:"center"}}>
                                    <td>{item.reportId}</td>
                                    <td style={{textAlign:"left"}}>{item.reportType.reportType}</td>
                                    <td>{item.deviceId}</td>
                                    <td style={{textAlign:"left"}}>{item.reportTittle}</td>
                                    {/*<td>{item.commitmentDate.slice(0, -9)}</td>*/}
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
        );
    }

}


export default RoutineTableAll;