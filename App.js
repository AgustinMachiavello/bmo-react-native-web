import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BMO from "./src/containers/BMO";

export default function App() {
  return (
    <View style={styles.container}>
      <BMO></BMO>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
  }
});
