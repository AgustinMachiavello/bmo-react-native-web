import React, { useEffect, useState } from "react";
import { View, Button } from "react-native";
import { Audio } from "expo-av";

const BASE_SOUND_PATH = "../../../../songs";

const AudioTrack = ({ audioId }) => {
  const [soundLoaded, setSoundLoaded] = useState(false);

  const soundObject = new Audio.Sound();

  const playSound = async () => {
    if (!soundLoaded) {
      try {
        await soundObject.loadAsync(audioId);
        setSoundLoaded(true);
      } catch (error) {
        console.error("Error loading track:", error);
      }
    }

    try {
      await soundObject.playAsync();
    } catch (error) {
      console.error("Error at playing track:", error);
    }
  };

  return (
    <View>
      <Button title="Reproducir" onPress={() => playSound()} />
    </View>
  );
};

export default AudioTrack;
