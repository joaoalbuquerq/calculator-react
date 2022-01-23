import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './calculator';
import 'bootstrap/dist/css/bootstrap.min.css' //Importa o CSS Bootstrap.

ReactDOM.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);

