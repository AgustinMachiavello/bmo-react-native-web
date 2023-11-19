import React from "react";

import { View, StyleSheet } from "react-native";
import { letterToViseme } from "./utils";

const Mouth = () => {
  const visemeSvg = letterToViseme("A");
  return (
    <View style={styles.container}>
      <View style={styles.mouth}>{visemeSvg}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  mouth: {
    flex: 1
  }
});

export default Mouth;
