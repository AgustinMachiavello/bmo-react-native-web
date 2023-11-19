import React, { useEffect, useState } from "react";
import { View } from "react-native";
import AudioTrack from "./components/AudioTrack";

import song1 from "../../songs/i-dont-want-to-set-the-world-on-fire.mp3";

const SONG_LIST = [
  {
    id: "i-dont-want-to-set-the-world-on-fire.mp3",
    file: song1
  }
];

const MusicPlayer = () => {
  const [selectedSongId, setSelectedSongId] = useState();

  useEffect(() => {
    setSelectedSongId(SONG_LIST[0].file);
  }, []);

  return (
    <View>
      <AudioTrack songId={selectedSongId} autoPlay={true}></AudioTrack>
    </View>
  );
};

export default MusicPlayer;
