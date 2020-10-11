import React from 'react'
import "./Widgets.css";
import SearchIcon from '@material-ui/icons/Search';

import {TwitterTweetEmbed} from "react-twitter-embed";
// import {TwitterTimelineEmbed,
//     TwitterShareButton,
//     TwitterTweetEmbed,
// }from "react-twitter-embed";


function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="search Twitter" type="text" />
            </div>

            <div className="widget__widgetContainer">
            <h2>whats happening </h2>

            <TwitterTweetEmbed tweetId={"1212145130381033472"} />
{/* 
            <TwitterTimelineEmbed
            SourceType="profile"
            screenName="shenalsj"
            options={{height: 400}}
            />

            <TwitterShareButton
             url={"https://facebook.com/shenalsj"}
             options={{ text: "#reactjs is awesome", via: "shenalsj" }}
           /> */}

            </div>
        </div>
    )
}

export default Widgets
