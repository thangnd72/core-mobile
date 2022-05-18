import React from "react";
import { HomeStackContainer } from "./stackHomeNavigation";
import { SettingStackContainer } from "./stackSettingNavigation";
import { NotificationStackContainer } from "./stackNotification";
import { RouteName } from "constant";
import { Image } from "react-native";
import { TabIcon } from "assets";
import { sizes } from "utils/sizes";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

type Props = {};
export const TabContainer = (props: Props) => {
  return (
    <Tab.Navigator
      initialRouteName={RouteName.HOME}
      tabBarOptions={{
        activeTintColor: "#FFF",
        inactiveTintColor: "#000",
        activeBackgroundColor: "#2ECC71",
        inactiveBackgroundColor: "white",
        // style: {
        //   backgroundColor: "#CE4418",
        // },
      }}
      backBehavior="history"
    >
      <Tab.Screen
        name={RouteName.HOME}
        options={{
          tabBarLabel: "Trang chủ",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Image
                style={{
                  width: sizes._22sdp,
                  height: sizes._22sdp,
                  tintColor: color,
                }}
                source={TabIcon.home}
              />
            ) : (
              <Image
                style={{
                  width: sizes._18sdp,
                  height: sizes._18sdp,
                  tintColor: color,
                }}
                source={TabIcon.home}
              />
            ),
        }}
        component={HomeStackContainer}
      />
      <Tab.Screen
        name={RouteName.SETTING}
        options={({ route, navigation }) => ({
          tabBarLabel: "Cài đặt",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Image
                style={{
                  width: sizes._22sdp,
                  height: sizes._22sdp,
                  tintColor: color,
                }}
                source={TabIcon.setting}
              />
            ) : (
              <Image
                style={{
                  width: sizes._18sdp,
                  height: sizes._18sdp,
                  tintColor: color,
                }}
                source={TabIcon.setting}
              />
            ),
        })}
        component={SettingStackContainer}
      />
      <Tab.Screen
        name={RouteName.NOTIFICATION}
        options={({ route, navigation }) => ({
          tabBarLabel: "Thông báo",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Image
                style={{
                  width: sizes._22sdp,
                  height: sizes._22sdp,
                  tintColor: color,
                }}
                source={TabIcon.notification}
              />
            ) : (
              <Image
                style={{
                  width: sizes._18sdp,
                  height: sizes._18sdp,
                  tintColor: color,
                }}
                source={TabIcon.notification}
              />
            ),
        })}
        component={NotificationStackContainer}
      />
    </Tab.Navigator>
  );
};
