import { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Text,
  Button
} from "react-native";

import COLORS from "../../styles/colors";

const DebugPanel = ({ onModeChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <View style={styles.container}>
      {isMenuOpen && (
        <ScrollView style={styles.menu}>
          <Button
            title="Normal mode"
            onPress={() => onModeChange("normal")}
          ></Button>
          <Button
            title="Music mode"
            onPress={() => onModeChange("music")}
          ></Button>
        </ScrollView>
      )}
      <TouchableHighlight
        style={styles.openCloseButton}
        onPress={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Text>{isMenuOpen ? "CLOSE" : "OPEN"} DEBUG</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "fixed",
    top: 0,
    right: 0,
    padding: 20
  },
  menu: {
    flex: 1
  },
  openCloseButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: COLORS.cian,
    padding: 10
  }
});

export default DebugPanel;
