import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Report from '../pages/Report';
import ReportType from '../pages/ReportType';
import ReportBody from '../pages/ReportBody';
import One from './One';
import notfound from '../pages/NotFound';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/home" component={One}/>
                <Route exact path="/ReportType" component={ReportType}/>
                <Route exact path="/Report" component={Report}/>
                <Route exact path="/ReportBody" component={ReportBody}/>
                <Route component={notfound}/>
            </Switch>
        </BrowserRouter>
    );

}

export default App;