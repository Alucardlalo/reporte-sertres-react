import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/One.css';


class One extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="One">
            <div className="One__header">
              <h2>Reporte Quincenal Sertres </h2>
            </div>
    
            <div className="container">
             <ul className="nav nav-pills" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" href="/home" id="#home">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/reporttype" id="#menu1">Tipo Reporte</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/report" id="#menu2">Reporte</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/reportbody" id="#menu3">Contenido de Reporte</a>
                    </li>
                  </ul>
             </div>
        </div>

        <div className="container-fluid">
          <div className="container" >
             <div className="titleMain">
                <h3 className="seccion">Home</h3>
                <p>Reportes quincenales de AA UPS y PE</p>
                </div>
          </div>  
        </div>
      </React.Fragment>
    );
  }
}

export default One;
