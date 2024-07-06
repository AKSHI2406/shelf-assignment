import { View, Text, Dimensions } from "react-native";
import React, { useState } from "react";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import Stepper from "./Stepper";
import { stepper } from "../utilities/constants/stepper";
import names from "../utilities/constants/names";
import { color } from "../utilities/constants/colors";
import fonts from "../utilities/constants/fonts";

const screenStyle = { flex: 1, paddingTop: 48, paddingHorizontal: 14 };
const indicatorStyle = {
  backgroundColor: color.BLUE,
  width: 76,
  height: 3,
  marginHorizontal: 30,
};

const FirstRoute = (date) => () =>
  (
    <View style={screenStyle}>
      <Stepper config={stepper(date)} />
    </View>
  );

const SecondRoute = (date) => () =>
  (
    <View style={screenStyle}>
      <Stepper config={stepper(date)} />
    </View>
  );
const ThirdRoute = (date) => () =>
  (
    <View style={screenStyle}>
      <Stepper config={stepper(date)} />
    </View>
  );

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={indicatorStyle}
    style={{ backgroundColor: color.WHITE }}
    activeColor={color.BLACK}
    inactiveColor={color.BLACK}
    renderLabel={({ route }) => (
      <View>
        <Text
          style={{
            fontFamily: fonts.POPPINS_SEMIBOLD,
            fontSize: 18,
            color: color.BLACK,
            textAlign: "center",
            lineHeight: 27,
          }}
        >
          {route.title}
        </Text>
        <Text
          style={{
            fontFamily: fonts.POPPINS_REGULAR,
            fontSize: 16,
            color: color.METALLIC_SILVER,
            textAlign: "center",
            lineHeight: 24,
          }}
        >
          {route.subtitle}
        </Text>
      </View>
    )}
  />
);

export default function TabScreen() {
  const [index, setIndex] = useState(0);
  const currDate = new Date();
  const prevDate = new Date();
  prevDate.setDate(currDate.getDate() - 1);
  const nextDate = new Date();
  nextDate.setDate(currDate.getDate() + 1);

  const [routes] = useState([
    {
      key: "first",
      title: names.YESTERDAY,
      subtitle: `${prevDate.getDate()} ${new Intl.DateTimeFormat("en", {
        month: "short",
      }).format(prevDate)}`,
    },
    {
      key: "second",
      title: names.TODAY,
      subtitle: `${currDate.getDate()} ${new Intl.DateTimeFormat("en", {
        month: "short",
      }).format(currDate)}`,
    },
    {
      key: "third",
      title: names.TOMORROW,
      subtitle: `${nextDate.getDate()} ${new Intl.DateTimeFormat("en", {
        month: "short",
      }).format(nextDate)}`,
    },
  ]);
  return (
    <View style={{ height: "100%" }}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={SceneMap({
          first: FirstRoute(prevDate),
          second: SecondRoute(currDate),
          third: ThirdRoute(nextDate),
        })}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get("window").width }}
      />
    </View>
  );
}
