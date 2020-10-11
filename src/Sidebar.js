import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import HoomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Button} from "@material-ui/core";




import SidebarOption from "./SidebarOption";
import { formatMs } from '@material-ui/core';


function Sidebar() {
    return (
        <div className="sidebar">
            {/*Twitter icon */}
            <TwitterIcon className="sidebar__twitterIcon" />

            <SidebarOption active Icon={HoomeIcon} text = "Home"/>
            <SidebarOption Icon={SearchIcon} text = "Explore"/>
           <SidebarOption Icon={NotificationsNoneIcon} text ="Notification"/>
           <SidebarOption Icon={MailOutlineIcon} text = "Message"/>
           <SidebarOption Icon={BookmarksIcon} text = "Bookmarks"/>
           <SidebarOption Icon={ListAltIcon} text = "Lists"/>
           <SidebarOption Icon={PermIdentityIcon} text = "Profile"/>
           <SidebarOption Icon={MoreHorizIcon} text = "More"/>

            <Button variant="outline" className="sidebar__tweet" fullWidth>Tweet </Button>
            {/* SidebarOption */}
            {/* SidebarOption */}
            {/* SidebarOption */}




        </div>
    )
}

export default Sidebar
