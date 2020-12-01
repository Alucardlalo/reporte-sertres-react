import React from 'react';


class Report extends React.Component{
    render(){
        return (
            <div>
                <div className="One">
            <div className="One__header">
              <h2>Reporte Quincenal sertres </h2>
            </div>
    
            <div className="container">
             <ul class="nav nav-pills" role="tablist">
                    <li class="nav-item">
                      <a class="nav-link" href="/" id="#home">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="" id="#menu1">Tipo reporte</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="" id="#menu2">reporte</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active" href="" id="#menu3">Contenido de reporte</a>
                    </li>
                  </ul>
             </div>
        </div>
                <br></br>

                
            </div>
        
        );
    }
}

export default Report;