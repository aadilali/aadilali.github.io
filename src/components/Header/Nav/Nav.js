import React from 'react';
import { NavLink } from 'react-router-dom';
import CartBadge from './CartBadge';

function Nav() {
    console.log("NAV");
    return (
        <div className="col-xl-10 col-lg-10 col-md-10">
            <div className="menu-main d-flex align-items-center justify-content-end">
                
                <div className="main-menu f-right d-none d-lg-block">
                    <nav> 
                        <ul id="navigation">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/products'>Products</NavLink></li>
                        </ul>
                    </nav>
                </div>
                <div className="header-right-btn f-right d-none d-xl-block ml-20">
                    <NavLink to='/cart'> <CartBadge /> </NavLink>
                </div>
            </div>
        </div>   
    );
}

export default Nav;