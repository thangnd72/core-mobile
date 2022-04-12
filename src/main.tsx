import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import OneSignal from "react-native-onesignal";
import { enableScreens } from "react-native-screens";
import SplashScreen from "react-native-splash-screen";
import { Provider } from "react-redux";
import SwitchScreen from "screens/SwitchScreen";
import store from "store/configureStore";
const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#FFF",
  },
};
enableScreens();
const AppLayout = () => {
  useEffect(() => {
    //OneSignal Init Code
    OneSignal.setLogLevel(6, 0);
    OneSignal.setAppId("5bdab538-1331-4e38-9306-096050378637");
    //END OneSignal Init Code
    //Method for handling notifications opened
    OneSignal.setNotificationOpenedHandler((notification) => {
      console.log("OneSignal: notification opened:", notification);
    });
    getUserId();
    SplashScreen.hide();
  });

  const getUserId = async () => {
    const info = await OneSignal.getDeviceState();
    console.log("userId", info?.userId);
  };

  return (
    <Provider store={store}>
      {/* <SafeAreaView style={{ flex: 0, backgroundColor: 'white' }} />
    <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} translucent /> */}
      <NavigationContainer theme={navTheme}>
        <SwitchScreen />
      </NavigationContainer>
    </Provider>
  );
};
let App = AppLayout;
export default App;
