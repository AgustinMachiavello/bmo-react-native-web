import React from "react";
import { View, StyleSheet, Text } from "react-native";

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
            <Column>2</Column>
            <Column>3</Column>
          </Row>
          <Row>
            <Column>4</Column>
            <Column>5</Column>
            <Column>
              <Button buttonType="B"></Button>
            </Column>
          </Row>
          <Row>
            <Column>
              <Button buttonType="A"></Button>
            </Column>
            <Column>8</Column>
            <Column>9</Column>
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
