import React, { useState } from "react";
import { View, StyleSheet, Dimensions, StatusBar } from "react-native";

import Face from "../Face";
import Controls from "../Controls";
import COLORS from "../../styles/colors";
import DebugPanel from "../DebugPanel";

const window = Dimensions.get("window");
const screenWidth = window.width;
const screenHeight = window.height;

const BMO = () => {
  // Data
  const isLandscape = screenHeight >= screenWidth;

  const faceStyles = isLandscape
    ? [styles.faceContainerLandscape]
    : [styles.faceContainerPortrait];

  // States
  const [selectedMode, setSelectedMode] = useState("normal");

  return (
    <View style={[styles.container, {}]}>
      <View style={faceStyles}>
        <Face mode={selectedMode} />
      </View>
      {/* {!isLandscape && <Controls />} */}
      <DebugPanel onModeChange={(mode) => setSelectedMode(mode)}></DebugPanel>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary
  },
  faceContainerLandscape: {
    width: screenHeight,
    height: screenWidth,
    marginTop: (screenHeight - screenWidth) / 2,
    marginLeft: (screenWidth - screenHeight) / 2,
    transform: [{ rotate: "90deg" }],
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  faceContainerPortrait: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default BMO;
