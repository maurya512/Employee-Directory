import React from "react";

import "./style.css";

function EmpCard(props) {
    return (
        <div className="card">
            {/* gets the employee's photo */}
            <div> <img alt={props.last} src={props.image}></img></div>
            {/* gets the employee's title first and last name */}
            <div>{props.title} {props.first} {props.last}</div>
            {/* gets the employee's gender */}
            <div>{props.gender}</div>
            {/* gets the employee's age */}
            <div>{props.age}</div>
            {/* getsh the employee's email */}
            <div>{props.email}</div>
        </div>
    );
}

// export the function to be used later on
export default EmpCard;