import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomePage from "../screens/HomePage";
import Wallet from "../screens/Wallet";
import Guide from "../screens/Guide";
import Chart from "../screens/Chart";

import image from "../utilities/constants/images";

import { Image } from "react-native";
import { color } from "../utilities/constants/colors";
import fonts from "../utilities/constants/fonts";

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            backgroundColor: color.WHITE,
            height: 100,
            position: "absolute",
          },
          tabBarIcon: ({ focused }) => {
            let icon;
            switch (route.name) {
              case "Home":
                icon = focused ? image.HOME_ICON_FOCUSED : image.HOME_ICON;
                break;
              case "Wallet":
                icon = focused ? image.WALLET_ICON_FOCUSED : image.WALLET_ICON;
                break;
              case "Guide":
                icon = focused ? image.GUIDE_ICON_FOCUSED : image.GUIDE_ICON;
                break;
              case "Chart":
                icon = focused ? image.CHART_ICON_FOCUSED : image.CHART_ICON;
                break;
              default:
                icon = image.HOME_ICON;
            }

            return <Image style={{ width: 24, height: 24 }} source={icon} />;
          },
          tabBarActiveTintColor: color.BLUE,
          tabBarInactiveTintColor: color.PALE_SILVER,
          tabBarLabelStyle: {
            fontSize: 14,
            fontFamily: fonts.POPPINS_REGULAR,
          },
        })}
      >
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Wallet" component={Wallet} />
        <Tab.Screen name="Guide" component={Guide} />
        <Tab.Screen name="Chart" component={Chart} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
