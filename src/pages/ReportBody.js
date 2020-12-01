import React from 'react';


class Report extends React.Component{
    render(){
        return (
            <React.Fragment>
                <div className="One">
            <div className="One__header">
              <h2>Reporte Quincenal sertres </h2>
            </div>
    
            <div className="container">
             <ul className="nav nav-pills" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link" href="/home" id="#home">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/reporttype" id="#menu1">Tipo reporte</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/report" id="#menu2">reporte</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="/reportbody" id="#menu3">Contenido de reporte</a>
                    </li>
                  </ul>
             </div>
        </div>
                <br></br>

                
            </React.Fragment>
        
        );
    }
}

export default Report;