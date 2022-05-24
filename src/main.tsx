import AsyncStorage from "@react-native-async-storage/async-storage";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import OneSignal from "react-native-onesignal";
import { enableScreens } from "react-native-screens";
import SplashScreen from "react-native-splash-screen";
import { Provider } from "react-redux";
import SwitchScreen from "screens/SwitchScreen";
import store from "store/configureStore";
import { ActionType as ContextType } from "store/context";
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

  useEffect(() => {
    // AsyncStorage.clear();
    CheckSplash();
    Splash();
  }, []);

  const getUserId = async () => {
    const info = await OneSignal.getDeviceState();
  };

  const Splash = () => {
    setTimeout(() => {
      store.dispatch({
        type: ContextType.FIELD_CHANGE,
        fieldName: "loaded",
        fieldValue: true,
      });
    }, 1000);
  };

  const CheckSplash = () => {
    (async () => {
      const displaySplash = await AsyncStorage.getItem("thangnd@splash");

      if (displaySplash && displaySplash != undefined) {
        store.dispatch({
          type: ContextType.FIELD_CHANGE,
          fieldName: "displaySplash",
          fieldValue: true,
        });
      }
    })();
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
