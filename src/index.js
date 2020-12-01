import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';

import One from './components/One'
import ReportType from './pages/ReportType';

const container = document.getElementById('app');

ReactDOM.render(<ReportType />, container);
