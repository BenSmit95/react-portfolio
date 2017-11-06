import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import MainPage from './components/MainPage.js'

setTimeout(() => {
    ReactDOM.render(<MainPage />, document.getElementById('app'));
}, 1000);