import React, { Component } from 'react';
import './Contact.css'
import '../../App.css'

class Contact extends Component {


    constructor(props) {
        super(props);
        this.state = { message: '', email: '' };
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleMessageChange(event) {
        this.setState({message: event.target.value})
      }

      handleEmailChange(event) {
        this.setState({email: event.target.value})
      }

    handleSubmit = (event) => {
        const templateId = 'template_qZW0hSVb';
    
        this.sendFeedback(templateId, {message_html: this.state.message, from_name: this.state.email, reply_to: this.state.email})
      }
    
      sendFeedback (templateId, variables) {
        window.emailjs.send(
          'gmail', templateId,
          variables
          ).then(res => {
            alert('Email sent!')
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err,
          alert('There was an error with your submission, please try again.')))
           
      }

    render() {

        let contactClass = 'outer-container container-' + this.props.theme;
        let innerClass = 'inner-container inner-' + this.props.theme;
        let linkedinClass = 'fa fa-linkedin fa-' + this.props.theme;
        let githubClass = 'fa fa-github fa-' + this.props.theme;

        return (
            <div className={contactClass} id={this.props.id}>
                <h2>Let's talk.</h2>
                <a href="https://www.linkedin.com/in/ryan-slevin-02b99140/" className={linkedinClass}></a>
                <a href="https://github.com/ryanslevin" className={githubClass}></a>
                <div className={innerClass}>
                    <form className="contact-form">
                        <div>
                           <input
                                id="email-body"
                                className='contact-form-field email'
                                name="RyanSlevin.com Contact Form Submission"
                                onChange={(event) => this.handleEmailChange(event)}
                                placeholder="example@fake.com"
                                required
                                value={this.state.email}
                            />
                            </div>
                            <div>
                            <textarea
                                id="email-body"
                                className='contact-form-field message-body'
                                name="RyanSlevin.com Contact Form Submission"
                                onChange={(event) => this.handleMessageChange(event)}
                                placeholder="Hello Ryan, I would like to hire you."
                                required
                                value={this.state.feedback}
                            />
                            </div>
                        <input type="button" value="Submit" className="contact-form-submit" onClick={() => this.handleSubmit()} />
                    </form>
                </div>
            </div>
        )
    }

}

export default Contact;