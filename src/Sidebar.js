import { Avatar } from '@material-ui/core';
import React from 'react';

import "./Sidebar.css";

function Sidebar() {

   
<div className="sidebar__recentItem">
<span className="sidebar__hash">#</span>

</div>


    return (
    <div className="sidebar"> 
<div class="sidebar__top">
    <img src="https://im.haberturk.com/2014/05/28/ver1401264839/952340_detay.jpg" alt=""/>
    <Avatar src="https://i.pinimg.com/originals/eb/1f/0c/eb1f0c6159c40fe38048c3e0b776f205.jpg" className="sidebar__avatar"> 
    </Avatar>
   
</div>
<div className="sidebar__stats">
<div className="sidebar__stat">
    <p>Who viewed you</p>
    <p className="sidebar__statNumber">123</p>
</div>
<div className="sidebar__stat">
<p>Views on post</p>
<p className="sidebar__statNumber">10</p>
</div>
</div>
<div className="sidebar__bottom">
    <p>Recent</p>
 
</div>
</div>
    );  
}

export default Sidebar;
