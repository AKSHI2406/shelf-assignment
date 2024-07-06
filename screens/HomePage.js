import React from "react";
import { View, Text, StyleSheet } from "react-native";
import names from "../utilities/constants/names";
import fonts from "../utilities/constants/fonts";
import { color } from "../utilities/constants/colors";

const style = StyleSheet.create({
  homeHolder: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  homeText: {
    fontFamily: fonts.POPPINS_REGULAR,
    fontSize: 36,
    color: color.PALE_SILVER,
  },
});

export default function HomePage() {
  return (
    <View style={style.homeHolder}>
      <Text style={style.homeText}>{names.HOMEPAGE}</Text>
    </View>
  );
}
