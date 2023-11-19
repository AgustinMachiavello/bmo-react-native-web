import React from "react";

import { View, StyleSheet } from "react-native";
import COLORS from "../../../../styles/colors";

const Eye = () => {
  return (
    <View style={styles.container}>
      <View style={styles.eye}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  eye: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    backgroundColor: COLORS.black
  }
});

export default Eye;
