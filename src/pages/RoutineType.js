import React from 'react';

import RoutineTypeTableAll from '../components/RoutineTypeTableAll';
import '../global.css';
import Navbar from "../components/Navbar";


class RoutineType extends React.Component{
    render(){
        return (
            <React.Fragment>
                <div className="One">
                <Navbar/>
        </div>
                <br></br>
                <RoutineTypeTableAll />
            </React.Fragment>
        
        );
    }
}

export default RoutineType;