import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeLayout from "screens/SettingScreen";
import { RouteName } from "../constant";
import { OPTS_COMMON } from "./navigationConfig";

const Stack = createStackNavigator();
type Props = {};

export const SettingStackContainer = (props: Props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...OPTS_COMMON,
      }}
    >
      <Stack.Screen
        name={RouteName.SETTING}
        component={HomeLayout}
        options={{
          headerShown: true,
          headerTitle: "Setting",
        }}
      />
    </Stack.Navigator>
  );
};
