import React from 'react'
import { Avatar, Button } from '@material-ui/core';

const AppList = () => {
    return (
        <div className="applist">
            <div className="applist__main">
                <div className="applist__apps">
                    <div className="applist__item">
                        <Avatar className="applist__avatar" />
                        <p>Account</p>
                    </div>
                    <div className="applist__item">
                        <img src="/assets/02-search.svg" alt="search" />
                        <p>Search</p>
                    </div>
                    <div className="applist__item">
                        <img src="/assets/03-maps.svg" alt="search" />
                        <p>Maps</p>
                    </div>

                    <div className="applist__item">
                        <img src="/assets/04-youtube.svg" alt="search" />
                        <p>Youtube</p>
                    </div>
                    <div className="applist__item">
                        <img src="/assets/05-playstore.svg" alt="search" />
                        <p>Playstore</p>
                    </div>
                    <div className="applist__item">
                        <img src="/assets/06-gmail.svg" alt="search" />
                        <p>Gmail</p>
                    </div>

                    <div className="applist__item">
                        <img src="/assets/07-contacts.svg" alt="search" />
                        <p>Contact</p>
                    </div>
                    <div className="applist__item">
                        <img src="/assets/08-drive.svg" alt="search" />
                        <p>Drive</p>
                    </div>
                    <div className="applist__item">
                        <img src="/assets/09-calendar.svg" alt="search" />
                        <p>Calender</p>
                    </div>

                    <div className="applist__item">
                        <img src="/assets/10-translate.svg" alt="search" />
                        <p>Translate</p>
                    </div>
                    <div className="applist__item">
                        <img src="/assets/11-photos.svg" alt="search" />
                        <p>Photos</p>
                    </div>
                    <div className="applist__item">
                        <img src="/assets/12-duo.svg" alt="search" />
                        <p>Duo</p>
                    </div>

                    
                    <div className="applist__item">
                        <img src="/assets/13-meet.svg" alt="search" />
                        <p>Meet</p>
                    </div>
                    <div className="applist__item">
                        <img src="/assets/14-docs.svg" alt="search" />
                        <p>Docs</p>
                    </div>
                    <div className="applist__item">
                        <img src="/assets/15-sheets.svg" alt="search" />
                        <p>Sheets</p>
                    </div>

                    <div className="applist__item">
                        <img src="/assets/16-slides.svg" alt="search" />
                        <p>Slides</p>
                    </div>
                    <div className="applist__item">
                        <img src="/assets/17-classroom.svg" alt="search" />
                        <p>Classroom</p>
                    </div>
                    <div className="applist__item">
                        <img src="/assets/18-business.svg" alt="search" />
                        <p>Business</p>
                    </div>

                    <div className="applist__line"></div>

                    <div className="applist__item">
                        <img src="/assets/19-shopping.svg" alt="search" />
                        <p>Shopping</p>
                    </div>
                    <div className="applist__item">
                        <img src="/assets/20-news.svg" alt="search" />
                        <p>News</p>
                    </div>
                    <div className="applist__item">
                        <img src="/assets/21-cloud.svg" alt="search" />
                        <p>Clouds</p>
                    </div>

                    <div className="applist__item">
                        <img src="/assets/22-blogger.svg" alt="search" />
                        <p>Blogger</p>
                    </div>
                    <div className="applist__item">
                        <img src="/assets/23-hangouts.svg" alt="search" />
                        <p>Hangouts</p>
                    </div>
                    <div className="applist__item">
                        <img src="/assets/24-keep.svg" alt="search" />
                        <p>Keep</p>
                    </div>

                    <div className="applist__item">
                        <img src="/assets/25-jamboard.svg" alt="search" />
                        <p>Jamboard</p>
                    </div>
                    <div className="applist__item">
                        <img src="/assets/26-earth.svg" alt="search" />
                        <p>Earth</p>
                    </div>
                    <div className="applist__item">
                        <img src="/assets/27-collections.svg" alt="search" />
                        <p>Collections</p>
                    </div>

                    <div className="applist__item">
                        <img src="/assets/28-ads.svg" alt="search" />
                        <p>Ads</p>
                    </div>
                    <div className="applist__item">
                        <img src="/assets/29-podcasts.svg" alt="search" />
                        <p>Podcasts</p>
                    </div>
                    <div className="applist__item">
                        <img src="/assets/30-forms.svg" alt="search" />
                        <p>Forms</p>
                    </div>
                </div>

                <div className="applist__more">
                    <Button variant="outlined" className="applist__moreButton">
                        More from Google
                    </Button>
                </div>
            </div>
        </div> 
    )
}

export default AppList
