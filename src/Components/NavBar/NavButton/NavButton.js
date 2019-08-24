import React, { Component } from 'react'

class NavButton extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.changeWord(this.props.name)}>{this.props.name}</button>
            </div>
        )
    }

}

export default NavButton;