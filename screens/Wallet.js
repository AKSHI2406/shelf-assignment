import React from "react";
import { View, Text, StyleSheet } from "react-native";
import names from "../utilities/constants/names";
import fonts from "../utilities/constants/fonts";
import { color } from "../utilities/constants/colors";

const style = StyleSheet.create({
  walletHolder: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  walletText: {
    fontFamily: fonts.POPPINS_REGULAR,
    fontSize: 36,
    color: color.PALE_SILVER,
  },
});

export default function Wallet() {
  return (
    <View style={style.walletHolder}>
      <Text style={style.walletText}>{names.WALLET}</Text>
    </View>
  );
}
