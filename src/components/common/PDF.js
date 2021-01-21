import React, {Component, PropTypes} from 'react';
import '../styles/PDFAA.css'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as moment from "moment/moment";

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

    jsPDFGenerator = ()=>{
        var device =[] , date=[], string='';
        {this.state.routineS.map((item)=>{
            device.push(item.deviceRel.deviceName);
            date.push(moment(item.endDate).format('DD/MMM/YYYY'));
        })}
        string = device.toString()+'_Date_' + date.toString() + '.pdf';
        const input = document.getElementById('pdfDown');
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'JPEG', 3, 0,205,286);
            // pdf.output('dataurlnewwindow');
            pdf.save(string);
          })
        ;
      }

    render(){
        return(
            <React.Fragment>
              <div className="PDFBack" id="pdfDown">
                <div className="container">
                <div className="PDFHeader">
                   <table className="tableHeader">
                        <tr>
                            <td className="Logo">LOGO</td>
                            <td className="tdHeader1">SERTRES</td>
                        </tr>
                   </table>
                   <button className="btn btn-outline-primary btnDownload" type="button" onClick={this.jsPDFGenerator}>
                       Descargar
                   </button>
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
                                <td className="col-sm-4 tdheader"><label className="labelBody">{item.deviceId}</label></td>
                                <td className="col-sm-2 tdheader2"><label className="labelBody"> Nombre Dispositivo:</label></td>
                                <td className="col-sm-4 tdheader"><label className="labelBody">{item.deviceRel.deviceName}</label></td>
                            </tr>
                            <tr className="row trBody2">
                                <td className="col-sm-2 tdheader2"><label className="labelBody"> Localidad:</label></td>
                                <td className="col-sm-4 tdheader"><label className="labelBody"> {item.deviceRel.buildingRel.buildingDataRel.buildingDataStreet}</label></td>
                                <td className="col-sm-2 tdheader2"><label className="labelBody"> No serie:</label></td>
                                <td className="col-sm-4 tdheader"><label className="labelBody"> {item.deviceRel.deviceSeries}</label></td>
                            </tr>
                            <tr className="row trBody2">
                                <td className="col-sm-2 tdheader2"><label className="labelBody"> Inmueble:</label></td>
                                <td className="col-sm-4 tdheader"><label className="labelBody"> {item.deviceRel.buildingRel.buildingDataRel.buildingType}</label></td>
                                <td className="col-sm-2 tdheader2"><label className="labelBody"> Marca:</label></td>
                                <td className="col-sm-4 tdheader"><label className="labelBody"> {item.deviceRel.deviceBrand}</label></td>
                            </tr>
                            <tr className="row trBody2">
                                <td className="col-sm-2 tdheader2"><label className="labelBody"> Responsable:</label></td>
                                <td className="col-sm-4 tdheader"><label className="labelBody"> {item.deviceRel.buildingRel.buildingDataRel.buildingDataResponsable}</label></td>
                                <td className="col-sm-2 tdheader2"><label className="labelBody"> Capacidad:</label></td>
                                <td className="col-sm-4 tdheader"><label className="labelBody"> </label></td>
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

                                        
                <div className="">
                    <table className="tableBodyQ">
                    {this.state.data.sort(({order: previousOrder}, {order:currentOrder})=> previousOrder - currentOrder).map((item) => (
                        <tr key={item.order} className="trQuestion">
                            <td className="tdQuestion1">{item.variableI.order}</td>
                            <td className="tdQuestion">{item.variableI.variableName}</td>
                            <td className="tdAnswer">{item.data}</td>
                           </tr>
                    ))}
                    </table>
                </div>                
                </div>
                <br/>
                <div className="PDFFoot">
                    <table className="tableElaborado">
                        <tr>
                            <td className="elaborado">Elaborado por:</td>
                        </tr>
                        <tr>
                            <td className="nameElaborado"></td>
                            <td className="FirmaElaborado"></td>
                        </tr>
                    </table>
                </div>
              </div>
              </div> 
            </React.Fragment>
        );
    }
}
export default AAPDF;
