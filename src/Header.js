import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';

function Header() {
    const [{user}, dispatch]=useStateValue();

    return (
        <div className='header'>
            <div className='header__left'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/600px-Facebook_f_logo_%282019%29.svg.png?20200820101156" alt="" />
                <div className='header__input'>
                <SearchIcon />
                <input type="text" placeholder='Search Facebook'/>
                </div>
            </div>
            <div className='header__middle'>
                <div className='header__options header__options--active'>
                    <HomeIcon fontSize='large'/> 
                </div>
                <div className='header__options'>
                    <FlagIcon fontSize='large'/>
                </div>
                <div className='header__options'>
                    <SubscriptionsIcon fontSize='large'/>
                </div>
                <div className='header__options'>
                    <StorefrontIcon fontSize='large'/>
                </div>
                <div className='header__options'>
                    <SupervisedUserCircleIcon fontSize='large'/>
                </div>
            </div>
            <div className='header__right'>
                <div class="header__info">
                <Avatar src={user.photoURL}/>
                <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                <AddIcon />                 
                </IconButton>
                <IconButton>
                <ViewComfyIcon />                 
                </IconButton>
                <IconButton>
                <ForumIcon />                 
                </IconButton>
                <IconButton>
                <NotificationsIcon />                 
                </IconButton>
                <IconButton>
                <ExpandMoreIcon />                 
                </IconButton>
            </div>
        </div>
    );
}

export default Header;
