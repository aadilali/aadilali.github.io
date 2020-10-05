import React from 'react';

import Logo from './Logo/Logo';
import Nav from './Nav/Nav';

function Header() {

    return (
        <header>
            <div className="header-area">
                <div className="main-header  header-sticky">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <Logo />
                            <Nav />
                        </div>                            
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;