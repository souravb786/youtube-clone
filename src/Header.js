import React, {useState} from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
function Header() {
    const [inputSearch, setInputSearch] = useState("");
    return (
        <div className="header">
            <div className="header__left"> 
                <MenuIcon />
                <Link to="/">
                    <img 
                    className="header__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png" alt="logo"/>
                </Link>
                
            </div>
            <div className="header__input">
                <input value={inputSearch}
                onChange = {(event) => setInputSearch(event.target.value)}
                placeholder="Search" type="text"/>
                
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputButton"/>
                </Link>
                
            </div>
            <div className="header__icons">
                <VideCallIcon className="header__icon"/>
                <AppsIcon className="header__icon"/>
                <NotificationsIcon className="header__icon"/>
                <Avatar src="https://yt3.ggpht.com/yti/ANoDKi6kP_JzBvcWrQjw8ZhAcdDXDu5Ui_n9XSPZMVQbCw=s88-c-k-c0x00ffffff-no-rj-mo" className="header__icon"/>
            </div>
        </div>
    )
}

export default Header
