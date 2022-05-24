import React from "react";
import { View, Text } from "react-native";
interface UIProps {
  navigation: any;
}
const SettingScreen = (props: UIProps) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2ECC71",
      }}
    >
      <Text>Setting!</Text>
    </View>
  );
};
export default SettingScreen;
