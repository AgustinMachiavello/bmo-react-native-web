import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import AudioTrack from "./components/AudioTrack";

import soundOn from "./icons/sound-on.png";
import soundOff from "./icons/sound-off.png";
import song1 from "../../../assets/songs/i-dont-want-to-set-the-world-on-fire.mp3";
import FileExplorer from "../../components/FileExplorer";

const SONG_LIST = [
  {
    id: "i-dont-want-to-set-the-world-on-fire.mp3",
    file: song1
  }
];

const MusicPlayer = () => {
  // States
  const [selectedSongFile, setSelectedSongFile] = useState();
  const [isPlaying, setIsPlaying] = useState(false);

  // Data
  const adaptedSongList = SONG_LIST.map((song) => ({
    id: song.id,
    label: song.id
  }));

  // Effects
  useEffect(() => {
    const song = SONG_LIST[0];
    setSelectedSongFile(song.file);
  }, []);

  return (
    <View style={styles.container}>
      <FileExplorer itemList={adaptedSongList}></FileExplorer>
      <View style={styles.imageContainer}>
        <Image
          source={isPlaying ? soundOn : soundOff}
          style={styles.imageWrapper}
        ></Image>
      </View>
      {/* <AudioTrack
        audioFile={selectedSongFile}
        onStart={() => setIsPlaying(true)}
      ></AudioTrack> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    height: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  imageWrapper: {
    flex: 1,
    height: "100px",
    width: "100px"
  }
});

export default MusicPlayer;
