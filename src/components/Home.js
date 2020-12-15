import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/One.css';
import Navbar from "./Navbar";
import Dashboard from "../pages/Dashboard";


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
                <h3 className="seccion">Dashboard</h3>
                </div>
          </div>
            <Dashboard />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
