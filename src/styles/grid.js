import { StyleSheet } from "react-native";

const gridStyles = StyleSheet.create({
  column: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  row: {
    flex: 1,
    flexDirection: "row"
  }
});

export default gridStyles;
