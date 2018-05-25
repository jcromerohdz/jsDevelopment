// console.log('app.js is runing');
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css'
import './styles/styles.scss';           


Header.defaultProps = {
    title: 'Indecision'
};

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));


