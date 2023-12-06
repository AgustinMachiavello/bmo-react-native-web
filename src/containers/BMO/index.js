import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import Face from "../Face";
import Controls from "../Controls";
import COLORS from "../../styles/colors";

const BMO = () => {
  // States
  const [selectedMode, setSelectedMode] = useState("music");

  return (
    <View style={styles.container}>
      <View style={styles.faceContainer}>
        <Face mode={selectedMode} />
      </View>
      <Controls />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary
  },
  faceContainer: {
    flex: 1,
    padding: 20
  }
});
export default BMO;
