import { Image, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "./screens/HomePage";
import Wallet from "./screens/Wallet";
import Guide from "./screens/Guide/Guide";
import Chart from "./screens/Chart";
import { PaperProvider } from "react-native-paper";
import { TabBar } from "react-native-tab-view";
import { CHART_ICON, CHART_ICON_FOCUSED, GUIDE_ICON, GUIDE_ICON_FOCUSED, HOME_ICON, HOME_ICON_FOCUSED, WALLET_ICON, WALLET_ICON_FOCUSED } from "./utilities/constants/const";

//do not show guide at the top of guide screen

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {borderTopLeftRadius: 24, borderTopRightRadius: 24,backgroundColor: '#FFFFFF', height:100, position:'absolute'},
          tabBarIcon: ({ focused }) => {
            let icon;

            if (route.name === 'Home') {
              icon = focused? HOME_ICON_FOCUSED :HOME_ICON 
            } else if (route.name === 'Wallet') {
              icon =focused? WALLET_ICON_FOCUSED: WALLET_ICON;
            }
            else if (route.name === 'Guide') {
              icon =focused? GUIDE_ICON_FOCUSED : GUIDE_ICON;
            }
            else if (route.name === 'Chart') {
              icon =focused? CHART_ICON_FOCUSED: CHART_ICON;
            }

            return <Image style={{width:24, height:24}} source={icon} />;
          },
          tabBarActiveTintColor: '#0373F3',
          tabBarInactiveTintColor: 'gray',
        })}>
          <Tab.Screen  name="Home" component={HomePage} />
          <Tab.Screen name="Wallet" component={Wallet} />
          <Tab.Screen name="Guide" component={Guide} />
          <Tab.Screen name="Chart" component={Chart} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
