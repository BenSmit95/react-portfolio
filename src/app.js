import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import LandingPage from './components/LandingPage';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<LandingPage />, document.getElementById('app'));