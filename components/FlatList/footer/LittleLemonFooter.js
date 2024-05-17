import React from "react";

import { View, Text, StyleSheet, FlatList } from "react-native";

const style = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#FFA500",
  },
  text: {
    fontSize: 14,
    alignSelf: "center",
  },
});

const LittleLemonFooter = () => {
  return (
    <View style={style.container}>
      <Text style={style.text}>All rights reserved by Little Lemon, 2022</Text>
    </View>
  );
};

export default LittleLemonFooter;
