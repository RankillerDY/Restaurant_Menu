import React from "react";

import { View, Text, StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: "#FFA500",
  },
  text: {
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 28,
  },
});

const LittleLemonHeader = () => {
  return (
    <View style={style.container}>
      <Text style={style.text}>Little Lemon</Text>
    </View>
  );
};

export default LittleLemonHeader;
