import React from 'react';
import {Pie} from 'react-chartjs-2';
import {uniqueId} from "recharts/lib/util/DataUtils";

class Dashboard extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            reports : [],
            loading: true,
            error: null,
            /*elementos que se usan para la grafica de todos los reportes*/
            statusA: [],
            reporttypeA: [],
            reporttypeB: [],
            beginDateA: [],
            endDateA: [],
            coloresA:[],
            dataA:[],
            opcionesA: []
        }
    }

   async componentDidMount() {
        await this.fetchReport()
        await this.generarcolores();
        await this.configGrafica();
    }

    fetchReport = async () =>{
        this.setState({loading:true, error: null })

        try{
            const response = await fetch('http://localhost:8090/sertresreporte/reporte/all')
            const reports = await response.json();
            this.setState({loading:false , reports: reports })
            /*creacion de grafica*/
            var status = [], reporttype= [],reporttypeB=[], beginDate = [], endDate = [] ;
            this.state.reports.map((item) =>{
                status.push(item.status);
                reporttype.push(item.reportType.reportTypeId);
                reporttypeB.push(item.reportType.descriptionI);
                beginDate.push(item.beginDate);
                endDate.push(item.endDate);
            })
            this.setState({statusA:status, reporttypeA:reporttype,reporttypeB: reporttypeB , beginDateA:beginDate, endDateA:endDate })
        }catch(error){
            this.setState({loading: false , error: error })
        }
    }

    generatedCharaterRdn(){
        var caracter = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9",];
        var numero =(Math.random()*15).toFixed(0);
        return caracter[numero];
    }

    colorRdn(){
     var color = "";
     for(var i=0; i<6;i++){
         color = color + this.generatedCharaterRdn();
     }
     return "#" + color;
    }

    generarcolores(){
        var colores = [];
        for (var i= 0; i<this.state.reports.length; i++){
            colores.push(this.colorRdn());
        }
        this.setState({coloresA : colores});
    }

    configGrafica(){
        /*etiquetas de grafica 1*/
        let datare = this.state.reporttypeB;
        const datare2 = new Set(datare);
        let resulter = [...datare2];
        /*datos de grfica 1*/
        let dataRepoA = this.state.reporttypeA;
        dataRepoA = dataRepoA.filter(Boolean);

        /*mapeo de grafica 1*/
        const data = {
            labels :  resulter,
            datasets: [{
                data: dataRepoA,
                backgroundColor : this.state.coloresA
            }]
        };
        const opciones = {
            responsive : true,
            maintainAspectRatio: false
        }
        this.setState({dataA: data, opcionesA: opciones});
    }

    render() {
        return(
            <React.Fragment>
                <div className="container">
                    <h4 className="titleMain">Reportes</h4>
                    <div style={{width: '100%', height:'500px'}}>
                        <Pie data={this.state.dataA} options={this.state.opcionesA} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Dashboard;