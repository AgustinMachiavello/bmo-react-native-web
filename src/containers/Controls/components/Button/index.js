import React, { useState } from "react";
import {
  Button as ReactNativeButton,
  StyleSheet,
  View,
  TouchableOpacity
} from "react-native";
import COLORS from "../../../../styles/colors";

const Button = ({ buttonType, onPress }) => {
  const buttonTypes = {
    A: buttonTypeAStyles.container,
    B: buttonTypeBStyles.container,
    C: buttonTypeCStyles.container
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={buttonTypes[buttonType]}></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
});

const buttonTypeAStyles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: "50%",
    aspectRatio: 1,
    borderWidth: 3,
    backgroundColor: COLORS.red
  }
});

const buttonTypeBStyles = StyleSheet.create({
  container: {
    width: "70%",
    borderRadius: "50%",
    aspectRatio: 1,
    borderWidth: 3,
    backgroundColor: COLORS.green
  }
});

const buttonTypeCStyles = StyleSheet.create({
  container: {
    width: 0,
    height: 0,
    borderLeftWidth: 40,
    borderLeftColor: "transparent",
    borderRightWidth: 40,
    borderRightColor: "transparent",
    borderBottomWidth: 60,
    borderBottomColor: COLORS.cian,
    borderStyle: "solid",
    borderColor: "black",
    aspectRatio: 1
  }
});

export default Button;
