import React from 'react'
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>            
            <hr />
            <ChannelRow 
                image="https://yt3.ggpht.com/ytc/AAUvwngVEWEYd1uHQMzZImTM8fofuoUXj6EMski-2t8u=s176-c-k-c0x00ffffff-no-rj"
                channel="Benny Productions"
                verified
                subs="1.01M"
                noOfVideos={92}
                description="I know the name is goofy. Things escalated.

                I'm Benny, Benji, Benjamin, whatever you want to call me, and on this channel you'll..."
            />
            <hr />
            <VideoRow />
        </div>
    )
}

export default SearchPage
