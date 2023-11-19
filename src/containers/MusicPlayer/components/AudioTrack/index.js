import React from "react";
import ReactAudioPlayer from "react-audio-player";

const AudioTrack = ({ songId, autoPlay, onPlay, onPause }) => {
  return (
    <ReactAudioPlayer
      src={songId}
      autoPlay={autoPlay}
      controls
      onPlay={onPlay}
      onPause={onPause}
    />
  );
};

export default AudioTrack;
