import React from 'react';

import RoutineBodyTableAll from "../components/RoutineBodyTableAll";
import Navbar from "../components/Navbar";


class Report extends React.Component{
    render(){
        return (
            <React.Fragment>
                <div className="One">
            <Navbar/>
        </div>
                <br></br>

                <RoutineBodyTableAll />
            </React.Fragment>

        );
    }
}

export default Report;