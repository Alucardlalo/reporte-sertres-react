import React from 'react';

import Navbar from '../components/Navbar'
import ReportTypeTableAll from '../components/ReportTypeTableAll';


class ReportType extends React.Component{
    render(){
        return (
            <div>
                <Navbar />
                <br></br>
                <ReportTypeTableAll />
                
            </div>
        
        );
    }
}

export default ReportType;