import {
  StyleSheet,
  Platform,
  View,
  SafeAreaView,
  StatusBar
} from "react-native";
import {
  DotGothic16_400Regular,
  useFonts
} from "@expo-google-fonts/dotgothic16";
import BMO from "./src/containers/BMO";
import COLORS from "./src/styles/colors";

export default function App() {
  // Fonts
  const [fontsLoaded] = useFonts({
    DotGothic16: DotGothic16_400Regular
  });

  if (!fontsLoaded) {
    return null; // Show loader until fonts are ready
  }

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
    backgroundColor: COLORS.red
  },
  safeAreaViewStyles: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: COLORS.primary
  }
});
