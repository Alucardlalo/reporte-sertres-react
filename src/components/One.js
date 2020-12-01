import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/One.css';


class One extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="One">
            <div className="One__header">
              <h2>Reporte Quincenal sertres </h2>
            </div>
    
            <div className="container">
             <ul className="nav nav-pills" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" href="/home" id="#home">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/reporttype" id="#menu1">Tipo reporte</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/report" id="#menu2">reporte</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/reportbody" id="#menu3">Contenido de reporte</a>
                    </li>
                  </ul>
             </div>
        </div>

        <div className="container-fluid">
          <div className="container" >
             <div className="titleMain">
                <h3 className="seccion">home</h3>
                <p>reportes quincenales de AA UPS y PE</p>
                </div>
          </div>  
        </div>
      </React.Fragment>
    );
  }
}

export default One;
