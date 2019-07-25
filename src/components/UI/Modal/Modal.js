import React, { Component } from 'react';

import classes from './Modal.css';
import Aox from '../../../hoc/Aox/Aox';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }
    
    render () {
        return (
            <Aox>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Aox>
        )
    }
}

export default Modal;