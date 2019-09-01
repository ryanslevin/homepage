import React from 'react';

import './Home.css'

export default function Home(props) {
    return (
        <div className='home' id={props.id}>
            <div className='moon-container'>
            <div id='moon' />
            </div>
            <div className='name-container'>
            <h2 className='name' >R y a n S l e v i n</h2>
            <p className='title'>Software Engineer - Vancouver, BC</p>
            </div>
            <div id='right-line' />

        </div>
    )
}
