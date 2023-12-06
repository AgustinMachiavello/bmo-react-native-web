import React, { useEffect, useState } from "react";
import { View, Button } from "react-native";
import { Audio } from "expo-av";
import PropTypes from "prop-types";

const AudioTrack = ({ audioFile, onStart }) => {
  // Data
  const soundObject = new Audio.Sound();

  // States
  const [soundLoaded, setSoundLoaded] = useState(false);

  // Handlers
  const handlePlaySound = async () => {
    if (!soundLoaded) {
      try {
        await soundObject.loadAsync(audioFile);
        setSoundLoaded(true);
      } catch (error) {
        // TODO: Log
        console.error("Error loading track:", error);
      }
    }

    try {
      await soundObject.playAsync();
      onStart();
    } catch (error) {
      // TODO: Log
      console.error("Error at playing track:", error);
    }
  };

  useEffect(() => {
    handlePlaySound();
  }, [audioFile]);

  return <></>;
};

AudioTrack.propTypes = {
  audioFile: PropTypes.object,
  onStart: PropTypes.func
};

AudioTrack.defaultProps = {
  onStart: () => {}
};

export default AudioTrack;
