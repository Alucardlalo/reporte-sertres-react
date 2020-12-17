import React from 'react';
import RoutineTableAll from "../components/RoutineTableAll";
import Navbar from "../components/Navbar";


class Routine extends React.Component{
    render(){
        return (
            <React.Fragment>
                <div className="One">
                    <Navbar />
        </div>
                <br></br>
                <RoutineTableAll />
            </React.Fragment>
        
        );
    }
}

export default Routine;