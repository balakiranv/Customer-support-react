import React, { Component } from 'react';
import './styles.css';

class Faq extends Component {
    render() {
        return (
            <div className="container">
                <div className="row faq-container bg-whitesmoke">
                    <div className="col-sm-3 left-panel">
                        <div>
                            <h2>Prefer email instead?</h2>
                            <div>
                                <button className="btn btn-light">
                                    <i className="fa fa-envelope"></i> Write to us
                            </button>
                            </div>
                            <h5>We are super quick in responding to your queries.</h5>
                        </div>
                    </div>

                    <div className="col-sm-9 right-panel">
                        <div className="mt-3">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-search"></i></span>
                                </div>
                                <input className="form-control" type="text" placeholder="What can we help you with? Start typing your question..." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="box">
                                    <div>
                                        <span className="fa-stack valign-top">
                                            <i className="far fa-circle fa-stack-2x"></i>
                                            <i className="fa fa-folder fa-stack-1x"></i>
                                        </span>
                                        <div className="title">Sharing Options</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="box">
                                    <div>
                                        <span className="fa-stack valign-top">
                                            <i className="far fa-circle fa-stack-2x"></i>
                                            <i className="fa fa-thumbtack fa-stack-1x"></i>
                                        </span>
                                        <div className="title">Managing Options</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="box">
                                    <div>
                                        <span className="fa-stack valign-top">
                                            <i className="far fa-file fa-stack-2x fa-flip-horizontal"></i>
                                            <i className="fa fa-user fa-stack-1x"></i>
                                        </span>
                                        <div className="title">Managing Candidates</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="box">
                                    <div>
                                        <span className="fa-stack valign-top">
                                            <i className="far fa-circle fa-stack-2x"></i>
                                            <i className="fa fa-user fa-stack-1x"></i>
                                        </span>
                                        <div className="title">Account Management</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="box">
                                    <div>
                                        <span className="fa-stack valign-top">
                                            <i className="far fa-circle fa-stack-2x"></i>
                                            <i className="fa fa-folder fa-stack-1x"></i>
                                        </span>
                                        <div className="title">Sourcing Candidates</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="box">
                                    <div>
                                        <span className="fa-stack valign-top">
                                            <i className="far fa-circle fa-stack-2x"></i>
                                            <i className="fa fa-folder fa-stack-1x"></i>
                                        </span>
                                        <div className="title">Reporting</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Faq;
