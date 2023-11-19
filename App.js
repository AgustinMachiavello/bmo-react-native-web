import {
  StyleSheet,
  Platform,
  View,
  SafeAreaView,
  StatusBar
} from "react-native";
import BMO from "./src/containers/BMO";
import COLORS from "./src/styles/colors";

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaViewStyles}>
      <View style={styles.container}>
        <BMO></BMO>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
  },
  safeAreaViewStyles: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: COLORS.primary
  }
});
