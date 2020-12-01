import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/One.css';


class One extends React.Component {
  render() {
    return (
      <div>
        <div className="One">
            <div className="One__header">
              <h2>Reporte Quincenal sertres </h2>
            </div>
    
            <div className="container">
             <ul class="nav nav-pills" role="tablist">
                    <li class="nav-item">
                      <a class="nav-link active" href="/" id="#home">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="" id="#menu1">Tipo reporte</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="" id="#menu2">reporte</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="" id="#menu3">Contenido de reporte</a>
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
      </div>
    );
  }
}

export default One;
