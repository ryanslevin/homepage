import React from 'react';

import './NavButton.css';

function NavButton(props) {

        return (
            <div>
                <button className='nav-button' onClick={() => props.handlePageChange(props.name)}>{props.name}</button>
            </div>
        )
    }

export default NavButton;