import React from 'react';  
import './Contact.css';
import { tsPropertySignature } from '@babel/types';

function Contact (props){
    return(
        <div className="Contact">
            <img
              src={props.img}
              alt={props.character}
              className="avatar"/>
              <div className="">
                    <p className="name"> {props.name} </p>

                    <div className="status">
                        {props.status ? <span className="status-online" ></span> : <span className=" status-offline" ></span>}
                        <span className="status-text"> {props.status ? "Online" : "Offline"} </span>
                    </div>
                </div>
      </div>
    );
}

export default Contact