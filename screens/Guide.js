import React from "react";
import { View } from "react-native";
import TabScreen from "../components/TabScreen";
import { Appbar } from 'react-native-paper';
import { BACK_BUTTON } from "../utilities/constants/const";

export default function Guide() {

  return (
    <View>
      <Appbar.Header style={{backgroundColor:'#fff', marginTop: 32, marginBottom:32,marginRight:4}}>
      <Appbar.Action icon={BACK_BUTTON} size={28}  />
      <Appbar.Content title="Itinerary Form"  titleStyle={{fontSize: 24, fontWeight: 600}}/>
    </Appbar.Header>
      <TabScreen/>
    </View>
  );
}