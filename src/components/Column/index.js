import React from "react";
import { View } from "react-native";

import gridStyles from "../../styles/grid";

const Column = ({ children }) => (
  <View style={gridStyles.column}>{children}</View>
);

export default Column;
