import React from "react";
import { View, StyleSheet } from "react-native";

import COLORS from "../../styles/colors";
import Button from "./components/Button";
import Row from "../../components/Row";
import Column from "../../components/Column";

const Controls = () => {
  return (
    <View style={styles.container}>
      {/* Main buttons */}
      <View
        style={{ flex: 1, flexDirection: "column-reverse", marginLeft: "auto" }}
      >
        <View style={styles.mainButtonsGrid}>
          <Row>
            <Column>
              <Button buttonType="C"></Button>
            </Column>
            <Column></Column>
            <Column></Column>
          </Row>
          <Row>
            <Column></Column>
            <Column></Column>
            <Column>
              <Button buttonType="B"></Button>
            </Column>
          </Row>
          <Row>
            <Column>
              <Button buttonType="A"></Button>
            </Column>
            <Column></Column>
            <Column></Column>
          </Row>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary
  },
  mainButtonsGrid: {
    width: 300,
    height: 300
  }
});

export default Controls;
