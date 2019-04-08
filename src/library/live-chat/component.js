import React, { Component } from 'react';
import './styles.css';

class Livechat extends Component {
  render() {
    return (
      <div className="livechat container-fluid h-100">
			<div className="row justify-content-end h-100">
				<div className="col-md-8 col-xl-6 chat">
					<div className="card bg-whitesmoke">
						<div className="card-body">
							<div className="d-flex justify-content-start mb-4">
								<div className="msg-container tri-right btm-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
								</div>
							</div>
							<div className="d-flex justify-content-end mb-4">
								<div className="msg-container-send tri-right btm-right">
                Ut enim ad minim veniam, quis nostrud exercitation.
								</div>
							</div>
							<div className="d-flex justify-content-start mb-4">
								<div className="msg-container tri-right btm-left">
                Duis aute irure dolor in reprehenderit in voluptate velit esse.
								</div>
							</div>
							<div className="d-flex justify-content-end mb-4">
								<div className="msg-container-send tri-right btm-right">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
								</div>
							</div>
							<div className="d-flex justify-content-start mb-4">
								<div className="msg-container tri-right btm-left">
								Sed ut perspiciatis unde omnis iste natus error 
								</div>
							</div>
							<div className="d-flex justify-content-end mb-4">
								<div className="msg-container-send tri-right btm-right">
                Ut enim ad minima veniam, quis nostrum exercitationem ? 
								</div>
							</div>

							<div className="d-flex justify-content-start mb-4">
								<div className="msg-container tri-right btm-left">
                At vero eos et accusamus et iusto odio dignissimos 
								</div>
							</div>
						</div>
						<div className="card-footer">
							<div className="input-group">
								<div className="input-group-append">
									<span className="input-group-text attach_btn"><i className="fas fa-paperclip"></i></span>
								</div>
								<textarea name="" className="form-control type_msg" placeholder="Type your message..."></textarea>
								<div className="input-group-append">
									<span className="input-group-text send_btn"><i className="fas fa-location-arrow"></i></span>
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

export default Livechat;
