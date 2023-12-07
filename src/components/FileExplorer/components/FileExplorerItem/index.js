import React, { Text, TouchableOpacity } from "react-native";
import { View, StyleSheet } from "react-native";
import { DotGothic16Text400Regular } from "../../../../styles/typography";

const FileExplorerItem = ({ label, onPress }) => {
  return (
    <View style={style.container}>
      <TouchableOpacity>
        <DotGothic16Text400Regular>{label}</DotGothic16Text400Regular>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default FileExplorerItem;
