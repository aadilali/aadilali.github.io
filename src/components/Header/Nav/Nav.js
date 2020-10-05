import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <div className="col-xl-10 col-lg-10 col-md-10">
            <div className="menu-main d-flex align-items-center justify-content-end">
                
                <div className="main-menu f-right d-none d-lg-block">
                    <nav> 
                        <ul id="navigation">
                            <li><NavLink to='/home'>Home</NavLink></li>
                            <li><NavLink to='/products'>Products</NavLink></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="portfolio.html">Portfolio</a></li>
                            <li><a href="#">Page</a>
                                <ul className="submenu">
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="blog_details.html">Blog Details</a></li>
                                    <li><a href="elements.html">Element</a></li>
                                    <li><a href="portfolio_details.html">Portfolio Details</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="header-right-btn f-right d-none d-xl-block ml-20">
                    <a href="#" className="btn header-btn">Get Free Consultent</a>
                </div>
            </div>
        </div>   
    );
}

export default Nav;