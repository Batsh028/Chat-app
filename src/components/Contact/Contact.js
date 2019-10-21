import React from 'react';  
import './Contact.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          favorite: false,
        };
      }
    render(){ return(
        <div className="Contact">
            <img
              src={this.prop.img}
              alt={this.prop.character}
              className="avatar"/>
              <div className="">
                    <p className="name"> {this.prop.name} </p>

                    <div className="status">
                        {this.prop.status ? <span className="status-online" ></span> : <span className=" status-offline" ></span>}
                        <span className="status-text"> {this.prop.status ? "Online" : "Offline"} </span>
                    </div>
                </div>
      </div>
    );
}
}

export default Contact ;