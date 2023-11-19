import React from "react";
import { View, StyleSheet } from "react-native";
import COLORS from "../../styles/colors";

const Controls = () => {
  return <View style={styles.container}>Controls</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary
  }
});

export default Controls;
