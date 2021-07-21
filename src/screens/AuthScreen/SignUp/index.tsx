import React from "react";
import { View, Text } from "react-native";
interface UIProps {
  navigation: any;
}
const SignUpLayout = (props: UIProps) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>SignUp</Text>
    </View>
  );
};
export default SignUpLayout;
