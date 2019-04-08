import React, { Component } from 'react';
import './styles.css';

class Mailus extends Component {
    constructor() {
        super();

        // setup local state
        this.state = {
            success: false,
            showAlert: false,
            message: '',
            subject: ''
        };
    }

    dismissNotification = () => {
        this.setState({showAlert: false});
    }

    sendEmail = () => {
        // 1. Do validations
        // 2. Show success / error
        // 3. reset the  form
        if (this.state.message !== ''
           && this.state.subject !== ''){
               this.setState({
                    showAlert: true,
                    success: true
                });
                this.reset();
        } else {
            this.setState({
                showAlert: true,
                success: false
            });
        }
    }

    reset = ()  => {
        this.setState({
            message: '',
            subject: ''
        });
    };

    onChanges = () => {
        this.setState({
            message: this.message.value,
            subject: this.subject.value
        });
    }

    render() {
        return (
            <div className="row justify-content-end">
                <div className="col-md-6 col-md-offset-3 bg-whitesmoke">
                    <form className="email-form">
                        {this.state.showAlert &&
                            <div className="form-group">
                            <div className="col-sm-12 input-group">
                                {this.state.success &&
                                <div className="alert alert-success" role="alert">
                                    Message Sent! Thanks for reaching out! Someone from our team will get back to you soon.
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.dismissNotification}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                }
                                {!this.state.success &&
                                <div className="alert  alert-danger" role="alert">
                                    Please fill all the details, before sending.
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.dismissNotification}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                }
                                
                            </div>
                        </div>
                        }
                        <div className="form-group">
                            <div className="col-sm-12 input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">To</span>
                                </div>
                                <input type="email" className="form-control border-left-0" name="email" disabled value="support@recruiterbox.com" />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-sm-12 input-group">
                                <input type="text" className="form-control" 
                                        name="subject" placeholder="Subject" 
                                        value={this.state.subject} onChange={this.onChanges}
                                        ref={(subject) => this.subject = subject}/>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-sm-12 input-group">
                                <textarea className="form-control" type="textarea" name="message" 
                                        placeholder="Message" maxLength="6000" rows="7" 
                                        value={this.state.message} onChange={this.onChanges}
                                        ref={(message) => this.message = message}>
                                </textarea>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-sm-12">
                                <span>
                                    <button className="btn btn-link float-left pl-0">
                                        <i className="fa fa-paperclip"></i>Attach files
                                    </button>
                                </span>
                                <button type="button" className="btn btn-primary float-right" onClick={this.sendEmail}>Send →</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Mailus;
