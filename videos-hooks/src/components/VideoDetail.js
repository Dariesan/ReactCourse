import React from "react";

const VideoDetail = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return <div>n-am</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

  return (
    <div className="ui segment">
      <div className="ui embed">
        <iframe src={videoSrc} title="cur" />
      </div>
      <h4 className="header">{selectedVideo.snippet.title}</h4>
      <p>{selectedVideo.snippet.description}</p>
    </div>
  );
};

export default VideoDetail;
