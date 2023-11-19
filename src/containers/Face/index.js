import React from "react";
import { View, StyleSheet, Text } from "react-native";
import COLORS from "../../styles/colors";
import Eye from "./components/Eye";
import Mouth from "./components/Mouth";

const Face = () => {
  return (
    <View style={styles.container}>
      <View style={styles.eyesAndMouthContainer}>
        <View style={styles.eyesContainer}>
          <Eye></Eye>
          <Eye></Eye>
        </View>
        <View style={styles.mouthContainer}>
          <Mouth />
        </View>
      </View>
    </View>
  );
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
