import React from 'react';
import VideoListItem from './videoListItem';

const VideoList = (props) => {
  const videoItems = props.videos.map( (video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    );
  });
  return (
    <div id="list" className="col-xl-4">
      <ol className="list-group">
        {videoItems}
      </ol>
    </div>
  );
}

export default VideoList;
