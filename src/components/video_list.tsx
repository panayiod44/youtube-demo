import React from "react";
import { useSelector } from "react-redux";
import { Video } from "../interfaces";
import { RootState } from "../store/store";
import VideoListItem from "./video_list_item";

export interface VideoListProps {
  onVideoSelect: (selectedVideo: Video) => void
}

const VideoList = (props: VideoListProps) => {

  const videos = useSelector((state: RootState) => state.youtube.videos)

  const videoItems = videos.map((video: any) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  return <ul className="col-md-4 list-group">{videoItems}</ul>;
};

export default VideoList;
