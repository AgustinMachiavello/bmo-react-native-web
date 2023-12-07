import React, { TouchableOpacity } from "react-native";
import { View, StyleSheet } from "react-native";
import { DotGothic16Text, FONT_SIZES } from "../../../../styles/typography";

const FileExplorerItem = ({ label, onPress }) => {
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={onPress}>
        <DotGothic16Text style={[style.text]} numberOfLines={1}>
          {label}
        </DotGothic16Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: FONT_SIZES.subtitle
  }
});

export default FileExplorerItem;
