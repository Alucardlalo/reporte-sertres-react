import { type } from 'jquery';
import React from 'react'
import '../styles/PDFAA.css'

class AAPDF extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            error: false,
          routineS: this.props.routine,
          data: this.props.data,
          type: this.props.Type,
          Question: [],
          AA:false,UPS:false,PE:false,
        }
        
    }

    componentDidMount() {
        this.typeRoutine();  
    }

    fetchReportBodyAA = async () =>{
        this.setState({loading:true, error: null })
            try{
                const response = await fetch('http://localhost:8090/sertresreporte/variable/reporttype/1')
                const reportsBody = await response.json();
                this.setState({loading:false , Question: reportsBody })
            }catch(error){
                this.setState({loading: false , error: error })
            }     
    }

    fetchReportBodyUPS = async () =>{
        this.setState({loading:true, error: null })
            try{
                const response = await fetch('http://localhost:8090/sertresreporte/variable/reporttype/2')
                const reportsBody = await response.json();
                this.setState({loading:false , Question: reportsBody })
            }catch(error){
                this.setState({loading: false , error: error })
            }     
    }

    fetchReportBodyPE = async () =>{
        this.setState({loading:true, error: null })
            try{
                const response = await fetch('http://localhost:8090/sertresreporte/variable/reporttype/3')
                const reportsBody = await response.json();
                this.setState({loading:false , Question: reportsBody })
            }catch(error){
                this.setState({loading: false , error: error })
            }     
    }


    typeRoutine(){
        var Type =[];
        this.state.routineS.map((item)=>{
            Type.push(item.reportTypeId);
        })
            this.setState({type:Type});
        if(Type == 1){
         this.setState({
             AA:true,
             UPS:false,
             PE:false,
         })  
         this.fetchReportBodyAA();
        }
        if(Type == 2){
            this.setState({
                AA:false,
                UPS:true,
                PE:false,
            }) 
            this.fetchReportBodyUPS();  
           }
           if(Type == 3){
            this.setState({
                AA:false,
                UPS:false,
                PE:true,
            }) 
            this.fetchReportBodyPE();  
           }
              
    }
    render(){
        return(
            <React.Fragment>
              <div className="PDFBack">
                <div className="container">
                <div className="PDFHeader">
                   <table className="tableHeader">
                        <tr>
                            <td className="Logo">LOGO</td>
                            <td className="tdHeader1">SERTRES</td>
                        </tr>
                   </table>
            </div>
                <div className="PDFBody">
                {this.state.routineS.map((item)=> (
                <table className="tableBody">
                        <tbody>
                            {this.state.AA?
                            <tr className="trBodyAA">
                                <td className="tdBodyAA">REVISIÓN Y PRUEBAS DE SISTEMA DE AIRE ACONDCIONADO (SAA)</td>
                            </tr>
                            :null}
                            {this.state.UPS?
                            <tr className="trBodyUPS">
                                <td className="tdBodyUPS">REVISIÓN Y PRUEBAS DE "UNINTERRUPTIBLE POWER SUPPLY" (UPS)</td>
                            </tr>
                            :null}
                            {this.state.PE?
                            <tr className="trBodyPE">
                                <td className="tdBodyPE">REVISIÓN Y PRUEBAS PERIODICAS A PLANTA ELECTRICA DE EMERGENCIA</td>
                            </tr>
                            :null}
                            <tr className="row trBody2">
                                <td className="col-sm-2 tdheader2"><label className="labelBody"> Id Dispositivo:</label></td>
                                <td className="col-sm-4 tdheader2"><label className="labelBody">{item.deviceId}</label></td>
                                <td className="col-sm-2 tdheader2"><label className="labelBody"> Nombre Dispositivo:</label></td>
                                <td className="col-sm-4 tdheader2"><label className="labelBody">{item.deviceRel.deviceName}</label></td>
                            </tr>
                            <tr className="row trBody2">
                                <td className="col-sm-2 tdheader2"><label className="labelBody"> Localidad:</label></td>
                                <td className="col-sm-4 tdheader2"><label className="labelBody"> {item.deviceRel.buildingRel.buildingDataRel.buildingDataStreet}</label></td>
                                <td className="col-sm-2 tdheader2"><label className="labelBody"> No serie:</label></td>
                                <td className="col-sm-4 tdheader2"><label className="labelBody"> {item.deviceRel.deviceSeries}</label></td>
                            </tr>
                            <tr className="row trBody2">
                                <td className="col-sm-2 tdheader2"><label className="labelBody"> Inmueble:</label></td>
                                <td className="col-sm-4 tdheader2"><label className="labelBody"> {item.deviceRel.buildingRel.buildingDataRel.buildingType}</label></td>
                                <td className="col-sm-2 tdheader2"><label className="labelBody"> Marca:</label></td>
                                <td className="col-sm-4 tdheader2"><label className="labelBody"> {item.deviceRel.deviceBrand}</label></td>
                            </tr>
                            <tr className="row trBody2">
                                <td className="col-sm-2 tdheader2"><label className="labelBody"> Responsable:</label></td>
                                <td className="col-sm-4 tdheader2"><label className="labelBody"> {item.deviceRel.buildingRel.buildingDataRel.buildingDataResponsable}</label></td>
                                <td className="col-sm-2 tdheader2"><label className="labelBody"> Capacidad:</label></td>
                                <td className="col-sm-4 tdheader2"><label className="labelBody"> </label></td>
                            </tr>
                        </tbody>
                    </table>
                     ))}
                <table className="tableBody">
                {this.state.AA?
                            <tr className="trBodyAA">
                                <td className="tdBodyAA">Con UPS en operación normal</td>
                            </tr>
                            :null}
                            {this.state.UPS?
                            <tr className="trBodyUPS">
                                <td className="tdBodyUPS">Con UPS en operación normal</td>
                            </tr>
                            :null}
                            {this.state.PE?
                            <tr className="trBodyPE">
                                <td className="tdBodyPE">Control en manual</td>
                            </tr>
                            :null}            
                </table>

                                        
                <div className="row container">
                    <table className="col-8 tableBodyQ">
                    {this.state.Question.sort(({order: previousOrder}, {order:currentOrder})=> previousOrder - currentOrder).map((item) => (
                        <tr key={item.order} className="trQuestion">
                            <td className="tdQuestion">{item.order}</td>
                            <td className="tdQuestion">{item.variableName}</td>
                           </tr>
                    ))}
                    </table>
                    <table className="col-4 tableBodyA">
                    {this.state.data.sort(({order: previousOrder}, {order:currentOrder})=> previousOrder - currentOrder).map((dato) => (
                        <tr key={dato.order} className="trAnswer">   
                            <td className="tdAnswer">{dato.data}</td>
                        </tr>
                    ))}   
                    </table>

                </div>
              
                    
                                
                </div>
                <div className="PDFFoot">

                </div>
              </div>
              </div> 
            </React.Fragment>
        );
    }
}
export default AAPDF;
