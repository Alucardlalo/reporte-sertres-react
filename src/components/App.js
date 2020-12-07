import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Report from '../pages/Report';
import ReportType from '../pages/ReportType';
import NewReportType from '../pages/NewReportType';
import NewReport from '../pages/NewReport';
import ReportBody from '../pages/ReportBody';
import One from './One';
import notfound from '../pages/NotFound';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/home" component={One}/>
                <Route exact path="/ReportType" component={ReportType}/>
                <Route exact path="/ReportType/new" component={NewReportType}/>
                <Route exact path="/Report" component={Report}/>
                <Route exact path="/Report/new" component={NewReport}/>
                <Route exact path="/ReportBody" component={ReportBody}/>
                <Route component={notfound}/>
            </Switch>
        </BrowserRouter>
    );

}

export default App;