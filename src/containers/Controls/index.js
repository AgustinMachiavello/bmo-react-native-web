import React from "react";
import { View, StyleSheet, Text } from "react-native";
import COLORS from "../../styles/colors";

const Controls = () => {
  return (
    <View style={styles.container}>
      <Text>Controls</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary
  }
});

export default Controls;
