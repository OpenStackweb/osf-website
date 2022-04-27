import React, { useEffect, useState } from 'react'
import LinkComponent from './LinkComponent';

const ProfileSubNav = ({ activePage, pageName }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [supportDropdown, setSupportDropdown] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const shouldCloseMenu = (option) => {
        if (option === activePage) setIsOpen(false);
    }

    return (

        <nav className="subnav-bar">
            <div className="container">
                <div className="location">
                    <span>Profile</span>
                </div>

                <ul id="links-list" className="links-list">
                    <li><LinkComponent href="/a/profile" className={`link ${activePage === 'profile-details' ? 'active' : ''}`}>Your Details</LinkComponent></li>
                    <li><LinkComponent href="/a/profile/legal" className={`link ${activePage === 'profile-legal' ? 'active' : ''}`}>Legal Agreements</LinkComponent></li>
                    <li><LinkComponent href="/a/profile/speaker" className={`link ${activePage === 'profile-speaker' ? 'active' : ''}`}>Speaker Details</LinkComponent></li>
                    <li><LinkComponent href="/a/profile/elections" className={`link ${activePage === 'profile-elections' ? 'active' : ''}`}>Elections</LinkComponent></li>
                </ul>

                <div className={`${isOpen ? 'mobile-subnav-menu active-page' : 'mobile-subnav-menu'}`} onClick={toggleMenu}>
                    <div className="page-name">{pageName}</div>
                    <i style={{ marginLeft: "5px" }} className={`fa ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
                </div>

            </div>

            {isOpen &&
                <div className="subnav-dropdown">
                    <ul id="links-list-mobile" className="links-list">
                        <li><LinkComponent onClick={() => shouldCloseMenu("profile-details")} href="/a/profile" className="link">Your Details</LinkComponent></li>
                        <li><LinkComponent onClick={() => shouldCloseMenu("profile-legal")} href="/a/profile/legal" className="link">Legal Agreements</LinkComponent></li>
                        <li><LinkComponent onClick={() => shouldCloseMenu("profile-speaker")} href="/a/profile/speaker" className="link">Speaker Details</LinkComponent></li>
                        <li><LinkComponent onClick={() => shouldCloseMenu("profile-elections")} href="/a/profile/elections" className="link">Elections</LinkComponent></li>
                    </ul>
                </div>
            }

        </nav>
    )
}

export default ProfileSubNav;