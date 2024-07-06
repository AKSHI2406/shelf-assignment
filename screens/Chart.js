import React, { Component } from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import fonts from "../utilities/constants/fonts";
import { color } from "../utilities/constants/colors";
import names from "../utilities/constants/names";

const style = StyleSheet.create({
  chartHolder: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  chartText: {
    fontFamily: fonts.POPPINS_REGULAR,
    fontSize: 36,
    color: color.PALE_SILVER,
  },
});

export default function Chart() {
  return (
    <View style={style.chartHolder}>
      <Text style={style.chartText}>{names.CHART}</Text>
    </View>
  );
}
