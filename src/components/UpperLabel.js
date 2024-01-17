import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

const UpperLabel = ({title}) => {
  return (
    <View style={styles.UpperBar}>
      <Text style={styles.UpperBarText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
UpperBar: {
    backgroundColor: "white", 
    width: "110%",
    height: 50,
    justifyContent: 'center',
  },
  UpperBarText: {
    marginLeft: 40,
    fontSize: 24,
    fontWeight: "500",
  },
  
});

export default UpperLabel;
