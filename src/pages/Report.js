import React from 'react';
import ReportTableAll from "../components/ReportTableAll";
import Navbar from "../components/Navbar";


class Report extends React.Component{
    render(){
        return (
            <React.Fragment>
                <div className="One">
                    <Navbar />
        </div>
                <br></br>
                <ReportTableAll />
            </React.Fragment>
        
        );
    }
}

export default Report;