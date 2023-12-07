import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import PropTypes from "prop-types";
import FileExplorerItem from "./components/FileExplorerItem";

const FileExplorer = ({ itemList, onFileClick }) => {
  return (
    <ScrollView style={styles.container}>
      {itemList.map((item) => (
        <View style={styles.itemWrapper}>
          <FileExplorerItem
            key={item.id}
            label={item.label}
            onPress={() => onFileClick(item)}
          ></FileExplorerItem>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  itemWrapper: {
    padding: 8
  }
});

FileExplorer.propTypes = {
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      data: PropTypes.any,
      onPress: PropTypes.func
    })
  )
};

export default FileExplorer;
