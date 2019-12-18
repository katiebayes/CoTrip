import React, { Component } from 'react';
import "./Modal.css";

class Modal extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="Modal" style={{transform: this.props.showModal ? 'translateY(0vh)' : 'translateY(-100vh)', opacity: this.props.showModal ? '1' : '0'}}>
        <div className="Modal__close">
          <a href="#" className="Modal__closeButton" onClick={this.props.onClose}>×</a>
        </div>
        <div className="Modal__body">
          <div className="Modal__messageBox">
            <h3 className="Modal__messageText">{this.props.message}</h3>
          </div>
        </div>
        <div className="Modal__footer">
          <div className="Modal__footerButtons">
            <button className="Modal__footerButtonCancel" onClick={this.props.onClose}>{this.props.cancelText}</button>
          </div>
          <div className="Modal__footerButtons">
            <button className="Modal__footerButtonConfirm" onClick={this.props.onConfirm}>{this.props.confirmText}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
