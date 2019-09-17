import React, { Component } from 'react';
import './Contact.css'
import '../../App.css'

class Contact extends Component {

    render() {

        let contactClass = 'outer-container container-' + this.props.theme;
        let innerClass = 'inner-container inner-' + this.props.theme;

        return (
            <div className={contactClass} id={this.props.id}>
                <div className={innerClass}>
                    <form>
                        <label>
                            Name:
    <input type="text" name="name" />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>

                </div>
            </div>
        )
    }

}

export default Contact;