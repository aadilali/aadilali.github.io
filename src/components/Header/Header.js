import React from 'react';
import { useLocation } from 'react-router-dom'

import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import Cart from '../Content/Products/Cart';

function Header(props) {
    
    const location = useLocation();
     console.log(location.pathname);
    return (
        <header>
            <div className="header-area">
                <div className="main-header  header-sticky">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <Logo />
                            <Nav />
                            { (location.pathname !== '/cart') ? <Cart /> : ''  }
                        </div>                            
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;