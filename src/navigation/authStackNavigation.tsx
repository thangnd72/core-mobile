import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SignInScreen, SignUpScreen } from "screens/AuthScreen";
import { RouteName } from "constant";
import { OPTS_COMMON } from "./navigationConfig";
import SplashScreen from "screens/SplashScreen";

const Stack = createStackNavigator();
type Props = {};

export class AuthStack extends React.Component<Props> {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          ...OPTS_COMMON,
        }}
      >
        <Stack.Screen
          name={RouteName.SPLASH}
          component={SplashScreen}
          options={{
            headerTransparent: true,
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name={RouteName.SIGN_IN}
          component={SignInScreen}
          options={{
            headerTransparent: true,
            headerTitle: "",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={RouteName.SIGN_UP}
          component={SignUpScreen}
          options={{
            headerTransparent: true,
            headerTitle: "",
          }}
        />
      </Stack.Navigator>
    );
  }
}
