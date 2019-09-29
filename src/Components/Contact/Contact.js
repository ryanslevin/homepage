import React, { Component } from 'react';
import './Contact.css'
import '../../App.css'
import { isMobile } from 'react-device-detect';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faEnvelope } from '@fortawesome//free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

class Contact extends Component {


    constructor(props) {
        super(props);
        this.state = { message: '', email: '', formResponse: '' };
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.formResponse = '';
    }

    // Updates state when the message field is changed
    handleMessageChange(event) {
        this.setState({ message: event.target.value })
    }

    // Updates state when the email field is changed
    handleEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    // Handles the submission of the contact form
    handleSubmit = () => {

        //The emailjs template id, used to format the email sent.
        const templateId = 'template_qZW0hSVb';

        //Validate that the fields have content entered.
        if (this.state.email === '') {
            this.setState({ formResponse: 'Launch Failed! Please add an email address and retry.' })
        } else if (this.state.message === '') {
            this.setState({ formResponse: 'Launch Failed! Please add a message and retry.' })
        } else {
            this.sendFeedback(templateId, { message_html: this.state.message, from_name: this.state.email, reply_to: this.state.email })
        }
    }

    //Handles sending the contact email with the emailjs tools
    sendFeedback(templateId, variables) {
        window.emailjs.send(
            'gmail', templateId,
            variables
        ).then(res => {
            this.setState({ message: '', email: '', formResponse: 'Email Launched!' })
        })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Error occured: ', err,
                this.setState({ formResponse: 'Launch Failed! Please retry.' })))

    }

    render() {

        let contactClass = 'outer-container container-' + this.props.theme;
        let innerClass = 'inner-container inner-' + this.props.theme;
        let emailFieldClass = 'contact-form-field contact-form-field-' + this.props.theme + ' email';
        let messageFieldClass = 'contact-form-field contact-form-field-' + this.props.theme + ' message-body';
        let rocketClass = 'fa fa-rocket submit-icon fa-' + this.props.theme;
        let contactIconClass = 'fa contact-icon fa-' + this.props.theme;

        let contactMethod = '';

        // Checks if the user is on a mobile device
        if (isMobile) {
            // User is on mobile, populates variable with social media links and email link
            contactMethod =
                <div className='contact-icon-container'>
                    <a className='contact-icons' href='mailto:ryanslevindev@gmail.com'><FontAwesomeIcon icon={faEnvelope} class={contactIconClass} /></a>
                    <a className='contact-icons' href="https://www.linkedin.com/in/ryan-slevin-02b99140/"><FontAwesomeIcon icon={faLinkedin} class={contactIconClass} /></a>
                    <a className='contact-icons' href="https://github.com/ryanslevin"><FontAwesomeIcon icon={faGithub} class={contactIconClass} /></a>
                </div>

        } else {
            // User is not on mobile, populates variable with the contact form
            contactMethod =
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
        }
        return (
            <div className={contactClass} id={this.props.id}>
                <div className={innerClass}>
                    <h2>Let's talk.</h2>
                    {contactMethod}
                </div>
            </div>
        )
    }

}

export default Contact;