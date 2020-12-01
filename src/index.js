import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';

import One from './components/One'
import ReportType from './pages/ReportType';
import Report from './pages/Report';
import ReportBody from './pages/ReportBody';

const container = document.getElementById('app');

ReactDOM.render(<ReportType />, container);
