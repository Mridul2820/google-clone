import React from 'react'
import { Link } from 'react-router-dom'

// Icons
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const SearchOptions = () => {
    return (
        <div className="searchpage__options">
            <div className="searchpage__optionsLeft">
                <div className="searchpage__option">
                    <SearchIcon />
                    <Link to="/all">All</Link>
                </div>
                <div className="searchpage__option">
                    <DescriptionIcon />
                    <Link to="/news">News</Link>
                </div>
                <div className="searchpage__option">
                    <ImageIcon />
                    <Link to="/images">Images</Link>
                </div>
                <div className="searchpage__option">
                    <LocalOfferIcon />
                    <Link to="/shopping">Shopping</Link>
                </div>
                <div className="searchpage__option">
                    <RoomIcon />
                    <Link to="/maps">Maps</Link>
                </div>
                <div className="searchpage__option">
                    <MoreVertIcon />
                    <Link to="/more">More</Link>
                </div>
            </div>
            <div className="searchpage__optionsRight">
                <div className="searchpage__option">
                    <Link to="/settings">Settings</Link>
                </div>
                <div className="searchpage__option">
                    <Link to="/tools">Tools</Link>
                </div>
            </div>
        </div>
    )
}

export default SearchOptions
