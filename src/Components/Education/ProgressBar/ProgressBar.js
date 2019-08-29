import React from 'react';
import './ProgressBar.css'

function ProgressBar(props) {

    return (
        <div id="progress">
            <span id="percent">5%</span>
            <div id="bar"></div>
        </div>
    )

}

export default ProgressBar;