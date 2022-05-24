import { HeaderStyleInterpolators } from "@react-navigation/stack";
import { IconImage } from "assets";
import React from "react";
import { Image, View } from "react-native";
import { sizes } from "utils/sizes";
export const OPTS_COMMON = {
  headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
  headerBackTitleVisible: false,
  headerStyle: {
    backgroundColor: "#FFF",
  },
  headerTintColor: "#010101",
  headerBackImage: () => (
    <View
      style={{
        paddingHorizontal: sizes._10sdp,
        paddingVertical: sizes._10sdp,
        width: sizes._37sdp,
        height: sizes._37sdp,
        backgroundColor: "#FFFFFF80",
        borderRadius: sizes._5sdp,
        opacity: 0.6,
      }}
    >
      <Image
        style={{ width: sizes._15sdp, height: sizes._15sdp, tintColor: "#FFF" }}
        source={IconImage.left_arrow}
      />
    </View>
  ),
};
