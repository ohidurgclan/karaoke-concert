import React from 'react';
import './Header.css'
import logo from '../../image/logo.png'
const Header = () => {
    return (
        <div>
            <div className="header-area">
                <div className="header-details">
                    <img className='logo' src={logo} alt='logo' />
                    <h1>Welcome To <span className="name-color"> National Karaoke Concert</span> 2021</h1>
                </div>
                <div>
                    <nav className='nav-bar'>
                        <a href="/ticket">Get Ticket</a>
                        <a href="/review">Performar Review</a>
                        <a href="/event">Manage Event</a>
                        <a href="/feedback">Feedback</a>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;