import React from 'react';
import pic from "../images/abeslogo.jpg";
import "../components/card.css";
function card = (props) =>{
    return (
        <div className="card">
            <h2>{props.name}</h2>
            <img src={props.pic} alt="ABES Logo" />
            <h2>{props.roll}</h2>
        </div>
    );
};
export default card;