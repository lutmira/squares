import React from 'react';
import ReactDOM from 'react-dom';
//Styles
import './index.css';
//Components
import SquaresApp from './square_app';

ReactDOM.render(
    <React.StrictMode>
        <SquaresApp />
    </React.StrictMode>,
    document.getElementById('root')
);