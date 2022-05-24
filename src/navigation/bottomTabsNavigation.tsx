import React, { FC, ReactNode } from "react";
import { HomeStackContainer } from "./stackHomeNavigation";
import { SettingStackContainer } from "./stackSettingNavigation";
import { NotificationStackContainer } from "./stackNotification";
import { RouteName } from "constant";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TabIcon, IconImage } from "assets";
import { sizes } from "utils/sizes";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

const CustomTabBarButton: FC<{ children?: ReactNode; onPress?: (e) => void }> =
  ({ children, onPress }) => (
    <TouchableOpacity
      style={{
        top: -sizes._30sdp,
        justifyContent: "center",
        alignItems: "center",
      }}
      activeOpacity={1}
      onPress={onPress}
    >
      <View
        style={{
          width: sizes._70sdp,
          height: sizes._70sdp,
          borderRadius: sizes._35sdp,
          backgroundColor: "#e32F45",
          ...styles.shadow,
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );

type Props = {};
export const TabContainer = (props: Props) => {
  return (
    <Tab.Navigator
      initialRouteName={RouteName.HOME}
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: sizes._25sdp,
          left: sizes._20sdp,
          right: sizes._20sdp,
          backgroundColor: "#FFF",
          borderRadius: sizes._15sdp,
          height: sizes._80sdp,
          ...styles.shadow,
        },
      }}
      backBehavior="history"
    >
      <Tab.Screen
        name={RouteName.HOME}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                style={{
                  width: sizes._22sdp,
                  height: sizes._22sdp,
                  tintColor: focused ? "#e32F45" : "#748c94",
                }}
                source={TabIcon.home}
              />
              <Text style={{ color: focused ? "#e32F45" : "#748c94" }}>
                HOME
              </Text>
            </View>
          ),
        }}
        component={HomeStackContainer}
      />
      <Tab.Screen
        name={RouteName.SETTING}
        options={({ route, navigation }) => ({
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                style={{
                  width: sizes._22sdp,
                  height: sizes._22sdp,
                  tintColor: focused ? "#e32F45" : "#748c94",
                }}
                source={TabIcon.setting}
              />
              <Text style={{ color: focused ? "#e32F45" : "#748c94" }}>
                SETTING
              </Text>
            </View>
          ),
        })}
        component={SettingStackContainer}
      />
      <Tab.Screen
        name={RouteName.NEW}
        options={({ route, navigation }) => ({
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={{
                width: sizes._22sdp,
                height: sizes._22sdp,
                tintColor: "#FFF",
              }}
              resizeMode="contain"
              source={IconImage.plus}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        })}
        component={SettingStackContainer}
      />
      <Tab.Screen
        name={RouteName.CHAT}
        options={({ route, navigation }) => ({
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                style={{
                  width: sizes._22sdp,
                  height: sizes._22sdp,
                  tintColor: focused ? "#e32F45" : "#748c94",
                }}
                source={TabIcon.setting}
              />
              <Text style={{ color: focused ? "#e32F45" : "#748c94" }}>
                SETTING
              </Text>
            </View>
          ),
        })}
        component={SettingStackContainer}
      />
      <Tab.Screen
        name={RouteName.NOTIFICATION}
        options={({ route, navigation }) => ({
          tabBarLabel: "Thông báo",
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                style={{
                  width: sizes._22sdp,
                  height: sizes._22sdp,
                  tintColor: focused ? "#e32F45" : "#748c94",
                }}
                source={TabIcon.notification}
              />
              <Text style={{ color: focused ? "#e32F45" : "#748c94" }}>
                NOTI
              </Text>
            </View>
          ),
        })}
        component={NotificationStackContainer}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
