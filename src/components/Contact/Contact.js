import React from 'react';
import './Contact.css';

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        status: false,
    };
    }

    render() {
        return (
            <div className="Contact">
                <img
                    src={this.props.img}
                    alt={this.props.character}
                    className="avatar" />
                <div className="">
                    <p className="name"> {this.props.name} </p>

                    <div className="status"
                         onClick={ event => {
                            const newStatus = !this.state.status;
                            this.setState({status: newStatus });
                            
                      }}>
                    {this.state.status ? <span className="status-online"></span> : <span className=" status-offline"></span>}
                    <span className="status-text"> {this.state.status ? "Online" : "Offline"} </span>
                </div>
            </div>
      </div >
    );
    }
}

export default Contact;