import React from 'react';

import ReportTypeTableAll from '../components/ReportTypeTableAll';
import '../global.css';
import Navbar from "../components/Navbar";


class ReportType extends React.Component{
    render(){
        return (
            <React.Fragment>
                <div className="One">
                <Navbar/>
        </div>
                <br></br>
                <ReportTypeTableAll />
            </React.Fragment>
        
        );
    }
}

export default ReportType;