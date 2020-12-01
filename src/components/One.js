import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/One.css';
import Navbar from './Navbar';

class One extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Navbar />
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
