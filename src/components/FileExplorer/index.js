import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import FileExplorerItem from "./components/FileExplorerItem";

const FileExplorer = ({ itemList }) => {
  return (
    <View style={styles.container}>
      {itemList.map((item) => (
        <FileExplorerItem
          key={item.id}
          label={item.label}
          onPress={item.onPress}
        ></FileExplorerItem>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

FileExplorer.propTypes = {
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      onPress: PropTypes.func
    })
  )
};

export default FileExplorer;
