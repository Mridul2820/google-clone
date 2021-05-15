import React, { useState } from 'react'
import { Link } from "react-router-dom";
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import Search from '../components/Search';
import AppList from '../components/AppList';

const Home = () => {
    const [appsOpen, setAppsOpen] = useState(false)

    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerMain">
                    <Link to="gmail">Gmail</Link>
                    <Link to="images">Images</Link>
                    <div 
                        className="home__appicon" 
                        style={{
                            backgroundColor: appsOpen ?  'rgba(95,99,104,0.24)' : '#fff'
                        }}
                        onClick={() => setAppsOpen(!appsOpen)}
                    >
                        <AppsIcon />
                    </div>
                    <AppList appsOpen={appsOpen} />
                    <Avatar className="home__avatar"/>
                </div>
            </div>
            <div className="home__body">
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="google logo" />
                <div className="home__inputContainer">
                    <Search />
                </div>
            </div>
            <div className="home__footer">
                <div className="home__footerLeft">
                    <Link to="/">About</Link>
                    <Link to="/">Advertising</Link>
                    <Link to="/">Business</Link>
                    <Link to="/">How Search works</Link>
                </div>
                <div className="home__gooterRight">
                    <Link to="/">Privacy</Link>
                    <Link to="/">Terms</Link>
                    <Link to="/">Settings</Link>
                </div>
            </div>
        </div>
    )
}

export default Home
