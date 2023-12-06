import React from "react";
import { View } from "react-native";

import gridStyles from "../../styles/grid";

const Row = ({ children }) => <View style={gridStyles.row}>{children}</View>;

export default Row;
