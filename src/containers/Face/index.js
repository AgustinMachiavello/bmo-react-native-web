import React from "react";
import { View, StyleSheet } from "react-native";
import COLORS from "../../styles/colors";
import Eye from "./components/Eye";
import Mouth from "./components/Mouth";
import MusicPlayer from "../MusicPlayer";

const Face = ({ mode }) => {
  const ExpressionMode = () => (
    <View style={styles.eyesAndMouthContainer}>
      <View style={styles.eyesContainer}>
        <Eye></Eye>
        <Eye></Eye>
      </View>
      <View style={styles.mouthContainer}>
        <Mouth />
      </View>
    </View>
  );
  const MusicPlayerMode = () => <MusicPlayer></MusicPlayer>;

  const selectedModeComponent =
    mode === "music" ? (
      <MusicPlayerMode></MusicPlayerMode>
    ) : (
      <ExpressionMode></ExpressionMode>
    );

  return <View style={styles.container}>{selectedModeComponent}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    borderRadius: 8,
    borderWidth: 4,
    borderStyle: "solid",
    borderColor: COLORS.black,
    aspectRatio: 3
  },
  eyesAndMouthContainer: {
    flex: 1
  },
  eyesContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  mouthContainer: {
    flex: 1
  }
});

export default Face;
