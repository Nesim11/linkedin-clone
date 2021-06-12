import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';



function Header() {
   
    return (
        <div className='header'>
            
<div className="header__left">
<img src="https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_14-linkedin-512.png" alt=""/>

<div className="header__search">

    <SearchIcon/>
    <input placeholder="Search" type="text"/>

</div>

</div>

<div className="header__right">
    <HeaderOption Icon={HomeIcon} title="Home"/>
    <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
    <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
    <HeaderOption Icon={ChatIcon} title="Messaging"/>
    <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
    <HeaderOption  avatar={true}
    title='me'
    />
</div>
</div>
    );    
}

export default Header;
