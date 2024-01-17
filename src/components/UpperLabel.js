import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

const UpperLabel = () => {
  return (
    <View style={[styles.UpperBar, styles.grnyLayout]}>
      <View style={[styles.grnyPasekChild, styles.grnyLayout]} />
      <Text style={styles.szukaj}>Szukaj</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  grnyLayout: {
    height: 47,
    width: 362,
    position: "absolute",
  },
  grnyPasekChild: {
    top: 0,
    left: 0,
    backgroundColor: "gray",
  },
  szukaj: {
    top: 10,
    left: 34,
    fontSize: 30,
    fontWeight: "500",
    color: "black",
    textAlign: "left",
    position: "absolute",
  },
  UpperBar: {
    top: 33,
    left: -2,
  },
});

export default UpperLabel;
