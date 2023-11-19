import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import COLORS from "../../styles/colors";
import Eye from "./components/Eye";
import Mouth from "./components/Mouth";
import MusicPlayer from "../MusicPlayer";

const Face = ({ mode }) => {
  const [selectedModeComponent, setSelectedModeComponent] = useState(mode);

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

  useEffect(() => {
    switch (mode) {
      case "music": {
        setSelectedModeComponent(MusicPlayerMode);
        break;
      }
      default: {
        setSelectedModeComponent(ExpressionMode);
        break;
      }
    }
  }, [mode]);

  return <View style={styles.container}>{selectedModeComponent}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    borderRadius: "8px",
    border: `4px solid ${COLORS.black}`
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
