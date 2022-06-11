import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import './Header.css'
const Header = () => {
    const [activeTab, setActiveTab] = useState("AdminPage");
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            setActiveTab('AdminPage');
        } else if (location.pathname == '/add') {
            setActiveTab("addURL");
        }
    }, [location])


    return (
        <div className='header'>
            <div className='header-left'>
                <p className='logo'>URL Shortener</p>
                <Link to='/'>
                    <p className={`${activeTab === "AdminPage" ? "active" : ""}`} onClick={() => setActiveTab("AdminPage")}>List</p>
                </Link>
                <Link to='/add'>
                    <p className={`${activeTab === "addURL" ? "active" : ""}`} onClick={() => setActiveTab("addURL")}>New</p>
                </Link>
            </div>
        </div>
    )
}

export default Header
