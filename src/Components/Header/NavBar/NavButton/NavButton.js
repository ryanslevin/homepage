import React from 'react'

function NavButton(props) {
    const style = {
            textAlign: 'center',
            margin: 'auto'
        }

        return (
            <div>
                <button style={style} onClick={() => props.handlePageChange(props.name)}>{props.name}</button>
            </div>
        )
    }


export default NavButton;