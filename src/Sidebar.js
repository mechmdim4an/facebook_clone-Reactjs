import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import PeopleIcon from '@material-ui/icons/People';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';
import AirplayIcon from '@material-ui/icons/Airplay';
import HistoryIcon from '@material-ui/icons/History';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FlagIcon from '@material-ui/icons/Flag';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [{user}, dispatch]=useStateValue();

    return (
        <div className='sidebar'>
            <SidebarRow src={user.photoURL} title={user.displayName} />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={GroupWorkIcon} title="Groups" />
            <SidebarRow Icon={StoreMallDirectoryIcon} title="Marketplace" />
            <SidebarRow Icon={AirplayIcon} title="Watch" />
            <SidebarRow Icon={HistoryIcon} title="Memories" />
            <SidebarRow Icon={BookmarkIcon} title="Saved" />
            <SidebarRow Icon={FlagIcon} title="Pages" />
            <SidebarRow Icon={ArrowDropDownIcon} title="see more" />
        </div>
    );
}

export default Sidebar;
