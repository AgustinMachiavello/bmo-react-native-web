import React from "react";
import { Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const DotGothic16Text = ({ style, children, ...restProps }) => (
  <Text style={[styles.text, ...style]} {...restProps}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  text: { fontFamily: "DotGothic16" }
});

DotGothic16Text.propTypes = {
  style: PropTypes.array,
  children: PropTypes.any
};

DotGothic16Text.defaultProps = {
  style: [],
  restProps: {}
};

const FONT_SIZES = {
  title: 40,
  subtitle: 20,
  text: 12
};

export { DotGothic16Text, FONT_SIZES };
