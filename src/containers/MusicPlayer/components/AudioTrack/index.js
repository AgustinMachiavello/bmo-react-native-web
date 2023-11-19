import React from "react";
import ReactAudioPlayer from "react-audio-player";

const AudioTrack = ({ songId, autoPlay }) => {
  return <ReactAudioPlayer src={songId} autoPlay={autoPlay} />;
};

export default AudioTrack;
