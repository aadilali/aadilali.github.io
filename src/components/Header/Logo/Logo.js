import React from 'react';
import logo from './logo.svg';

function Logo() {

    console.log("LOGO");

    return (
        <div className="col-xl-2 col-lg-2 col-md-1">
            <div className="logo">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        </div>
    );
}

export default Logo;