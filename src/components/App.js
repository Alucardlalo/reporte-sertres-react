import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Routine from '../pages/Routine';
import RoutineType from '../pages/RoutineType';
import NewRoutineType from '../pages/NewRoutineType';
import NewRoutine from '../pages/NewRoutine';
import ReportBody from '../pages/RoutineBody';
import LoginPage from '../pages/LoginPage';
import Home from './Home';
import notfound from '../pages/NotFound';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={LoginPage}/>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/RoutineType" component={RoutineType}/>
                    <Route exact path="/RoutineType/new" component={NewRoutineType}/>
                    <Route exact path="/Routine" component={Routine}/>
                    <Route exact path="/Routine/new" component={NewRoutine}/>
                    <Route exact path="/RoutineBody" component={ReportBody}/>
                    <Route component={notfound}/>
                </Switch>
            </BrowserRouter>
        );
    }
}