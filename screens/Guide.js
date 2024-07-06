import React from "react";
import { View } from "react-native";
import TabScreen from "../components/TabScreen";
import { Appbar } from "react-native-paper";
import image from "../utilities/constants/images";
import names from "../utilities/constants/names";
import { color } from "../utilities/constants/colors";
import fonts from "../utilities/constants/fonts";

const headerStyle = {
  backgroundColor: color.WHITE,
  marginTop: 32,
  marginBottom: 32,
  marginRight: 4,
};
const titleStyle = { fontSize: 24, fontFamily: fonts.POPPINS_SEMIBOLD };

export default function Guide() {
  return (
    <View>
      <Appbar.Header style={headerStyle}>
        <Appbar.Action icon={image.BACK_BUTTON} size={28} />
        <Appbar.Content title={names.ITINERARY_FORM} titleStyle={titleStyle} />
      </Appbar.Header>
      <TabScreen />
    </View>
  );
}
