import { View, Text, Dimensions } from "react-native";
import React, { useState } from "react";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import Stepper from "./Stepper";
import { stepper } from "../utilities/constants/stepper";

//do not hardcode any strings, why is it in caps
//reduce size of blue indicator

const screenStyle = { flex: 1, paddingTop: 48, paddingHorizontal: 24 };

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
    indicatorStyle={{ backgroundColor: "#0373F3" }}
    style={{ backgroundColor: "white" }}
    activeColor={"black"}
    inactiveColor={"black"}
    renderLabel={({ route }) => (
      <View>
        <Text
          style={{
            fontWeight: 600,
            fontSize: 18,
            color: "#000000",
            textAlign: "center",
            lineHeight: 27,
          }}
        >
          {route.title}
        </Text>
        <Text
          style={{
            fontWeight: 400,
            fontSize: 16,
            color: "#B1B1B1",
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
      title: "Yesterday",
      subtitle: `${prevDate.getDay()} ${new Intl.DateTimeFormat("en", {
        month: "short",
      }).format(prevDate)}`,
    },
    {
      key: "second",
      title: "Today",
      subtitle: `${currDate.getDay()} ${new Intl.DateTimeFormat("en", {
        month: "short",
      }).format(currDate)}`,
    },
    {
      key: "third",
      title: "Tomorrow",
      subtitle: `${nextDate.getDay()} ${new Intl.DateTimeFormat("en", {
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
