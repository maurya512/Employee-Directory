import React from "react";
import "./style.css";

function Header() {
    return (
        <div className= "wrapper">
            <div className="title">
                Employee Directory
            </div>
            <br></br>
            <br></br>
            <div className="tagline">
                Employees are the backbone of the company and all of the information about them can be found right here.
            </div>
        </div>
    );
}

export default Header;