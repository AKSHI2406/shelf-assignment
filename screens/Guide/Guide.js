import React from "react";
import { View } from "react-native";
import TabScreen from "../../components/TabScreen";
import { Appbar } from 'react-native-paper';
import { BACK_BUTTON } from "../../utilities/constants/const";

export default function Guide() {

  const _goBack = () => alert('Hatt');

  return (
    <View>
      <Appbar.Header style={{backgroundColor:'#fff'}}>
      <Appbar.Action icon={BACK_BUTTON} onPress={_goBack} size={28} />
      <Appbar.Content title="Itinerary Form"  titleStyle={{fontSize: 24, fontWeight: 600}}/>
    </Appbar.Header>
      <TabScreen/>
    </View>
  );
}