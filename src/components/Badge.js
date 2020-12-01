import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <h2>Reporte Quincenal sertres </h2>
        </div>

        <div className="container">
         <ul class="nav nav-pills" role="tablist">
			    <li class="nav-item">
			      <a class="nav-link active" href="./Badge.js" id="#home">Home</a>
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

        <div className="Badge__section-name">
          <div className="container" >
              <div id="home" className="container tab-pane active">
                <h3 className="seccion">home</h3>
                <p>reportes quincenales de AA UPS y PE</p>
              </div>
          </div>  
        </div>

        <div className="Badge__footer">

        </div>
      </div>
    );
  }
}

export default Badge;
