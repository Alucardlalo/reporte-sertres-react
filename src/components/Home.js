import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/One.css';
import Navbar from "./Navbar";


class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="One">
           <Navbar />
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

export default Home;
