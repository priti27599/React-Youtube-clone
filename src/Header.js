import React from 'react';
import react, { useState } from "react";
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';

function Header() {
  const [inputSearch, setInputSearch] = useState("");

    return (
        <div className="header">
            <div className="header__left">
             <MenuIcon />
             <Link to="/">
              <img 
               className="header__logo"
               src="https://unioncountyymca.org/wp-content/uploads/2020/04/youtube-3.png"
               alt=""
             />
             </Link>
            </div>

            <div className="header__input">
              <input 
              onChange={(e) => setInputSearch(e.target.value) } 
              Value={inputSearch} 
              placeholder="Search" 
              type="text" 
              />
              <Link to={`/search/${inputSearch}`}>
                <SearchIcon className="header__inputButton" />
              </Link>
            </div>

            <div className="header__icons">
            <VideoCallIcon className="header__icon"/>
            <AppsIcon className="header__icon"/>
            <NotificationsIcon className="header__icon"/>
            <Avatar 
              alt="Priti Kumari"
             src="https://i.ibb.co/f4PfLY0/Priti-bg.jpg" 
            />
            </div>
        </div>
    );
}

export default Header
