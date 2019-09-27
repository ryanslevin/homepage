import React, { Component } from 'react';
import './Contact.css'
import '../../App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome//free-solid-svg-icons'

class Contact extends Component {


    constructor(props) {
        super(props);
        this.state = { message: '', email: '', formResponse: '' };
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.formResponse = '';
    }

    handleMessageChange(event) {
        this.setState({ message: event.target.value })
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    handleSubmit = (event) => {
        const templateId = 'template_qZW0hSVb';

        if (this.state.email === '') {
            this.setState({formResponse: 'Launch Failed! Please add an email address and retry.'})
        }else if (this.state.message === '') {
            this.setState({formResponse: 'Launch Failed! Please add a message and retry.'})
        }else {
            this.sendFeedback(templateId, { message_html: this.state.message, from_name: this.state.email, reply_to: this.state.email })
        }
    }

    sendFeedback(templateId, variables) {
        window.emailjs.send(
            'gmail', templateId,
            variables
        ).then(res => {
            this.setState({message: '', email: '', formResponse: 'Email Launched!'})
        })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err,
                alert('There was an error with your submission, please try again.')))

    }

    render() {

        let contactClass = 'outer-container container-' + this.props.theme;
        let innerClass = 'inner-container inner-' + this.props.theme;
        let emailFieldClass = 'contact-form-field contact-form-field-' + this.props.theme +' email';
        let messageFieldClass = 'contact-form-field contact-form-field-' + this.props.theme + ' message-body';
        let rocketClass = 'fa fa-rocket submit-icon fa-' + this.props.theme;

        return (
            <div className={contactClass} id={this.props.id}>
                <h2>Let's talk.</h2>
                <div className={innerClass}>
                    <form className="contact-form">
                        <div>
                            <input
                                id="email-body"
                                type='email'
                                className={emailFieldClass}
                                name="RyanSlevin.com Contact Form Submission"
                                onChange={(event) => this.handleEmailChange(event)}
                                placeholder="email@example.com"
                                required='true'
                                value={this.state.email}
                            />
                        </div>
                        <div>
                            <textarea
                                id="email-body"
                                className={messageFieldClass}
                                name="RyanSlevin.com Contact Form Submission"
                                onChange={(event) => this.handleMessageChange(event)}
                                placeholder="Hello Ryan, I would like to hire you."
                                required
                                value={this.state.message}
                            />
                        </div>
                        <div className='submit-container'>
                        <FontAwesomeIcon type='submit' icon={faRocket} class={rocketClass} onClick={() => this.handleSubmit()} />
                        <p className='status-message'>{this.state.formResponse}</p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default Contact;