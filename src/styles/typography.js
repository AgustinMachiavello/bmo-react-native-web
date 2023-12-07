import React from "react";
import { Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const DotGothic16Text400Regular = ({ style = {}, children }) => (
  <Text style={[styles.text, ...style]}>{children}</Text>
);

const styles = StyleSheet.create({
  text: { fontFamily: "DotGothic16" }
});

DotGothic16Text400Regular.propTypes = {
  style: PropTypes.array,
  children: PropTypes.any
};

DotGothic16Text400Regular.defaultProps = {
  style: []
};

export { DotGothic16Text400Regular };
