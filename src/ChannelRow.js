import Avatar from "@material-ui/core/Avatar";
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import React from 'react';
import "./ChannelRow.css";
function ChannelRow({image, channel, noOfVideos, subs, description , verified}) {
    return (
        <div className="channelRow">
            <Avatar  className="channelRow__logo" 
                src={image} alt={channel} 
            />
            <div className="channelRow__text">
                <h4>{channel} {verified && <VerifiedIcon />}</h4>
                <p>
                    {subs} subscriers . {noOfVideos} videos
                </p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
