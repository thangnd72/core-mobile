import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation } from "@react-navigation/native";
import { ImageSource } from "assets";
import { RouteName } from "constant";
import React, { useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { compose } from "redux";
import { ApplicationState } from "store/configureAction";
import store from "store/configureStore";
import { ActionType as ContextType } from "store/context";
import { ActionCreators as ContextAction } from "store/context";

const slides = [
  {
    key: "one",
    title: "Make your own private\ntravel plan",
    text: "Formulate your strategy to receive\nwonderful gift packs",
    image: ImageSource.intro_slide1,
    backgroundColor: "#59b2ab",
  },
  {
    key: "two",
    title: "Customize your\nHigh-end travel",
    text: "Countless high-end\nentertainment facilities",
    image: ImageSource.intro_slide2,
    backgroundColor: "#febe29",
  },
  {
    key: "three",
    title: "High-end leisure projects\nto choose from",
    text: "The world's first-class modern leisure\nand entertainment method",
    image: ImageSource.intro_slide3,
    backgroundColor: "#22bcb5",
  },
];

interface Props {
  displaySplash: boolean;
  loaded: boolean;
}
const SplashScreen = (props: Props) => {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    _retrieveData();
  });

  const _storeData = async () => {
    try {
      await AsyncStorage.setItem("thangnd@splash", "thangnd@splash");
    } catch (error) {}
  };

  const _retrieveData = async () => {
    try {
      // if (props.displaySplash && props.loaded) {
      //   setTimeout(() => {
      //     navigation.navigate(RouteName.SIGN_IN);
      //   }, 0);
      // }
      const value = await AsyncStorage.getItem("thangnd@splash");
      if (value !== null) {
        navigation.navigate(RouteName.SIGN_IN);
      }
    } catch (error) {}
  };

  const _onDone = () => {
    _storeData();
    navigation.navigate(RouteName.SIGN_IN);
  };

  const _renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "space-around",
          backgroundColor: "#E5E5E5",
        }}
      >
        <View>
          <Image
            style={{
              width: "100%",
            }}
            source={item.image}
          ></Image>
        </View>
        <View>
          <Text
            style={{
              fontSize: 28,
              lineHeight: 30,
              color: "#000",
              textAlign: "center",
            }}
          >
            {item.title}
          </Text>
          <Text
            style={{
              fontSize: 18,
              lineHeight: 22,
              color: "#B4B4B4",
              marginTop: 20,
              textAlign: "center",
            }}
          >
            {item.text}
          </Text>
        </View>
      </View>
    );
  };
  const _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text style={[styles.textStyled, { color: "#D5012D" }]}>TIẾP TỤC</Text>
      </View>
    );
  };
  const _renderDoneButton = () => {
    return (
      <TouchableOpacity style={styles.buttonStyled} onPress={() => {}}>
        <Text style={styles.textStyled}>BẮT ĐẦU</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {!props.loaded ? (
        <View
          style={{
            flex: 1,
          }}
        >
          <Image
            source={ImageSource.splash}
            style={{ width: width, height: height }}
            resizeMode="cover"
          />
        </View>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={_renderItem}
          onDone={() => _onDone()}
          renderDoneButton={_renderDoneButton}
          renderNextButton={_renderNextButton}
          dotStyle={{ backgroundColor: "#C4C4C4", width: 6, height: 6 }}
          activeDotStyle={{ backgroundColor: "#D5012D" }}
        />
      )}
    </View>
  );
};
const mapStateToProps = (state: ApplicationState) => ({
  displaySplash: state.ContextState.displaySplash,
  loaded: state.ContextState.loaded,
});
const mapDispatchToProps = {
  ...ContextAction,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(SplashScreen as any);

const styles = StyleSheet.create({
  buttonCircle: {
    width: 70,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyled: {
    width: 129,
    height: 40,
    backgroundColor: "#d5012d",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  textStyled: {
    fontSize: 15,
    lineHeight: 24,
    fontFamily: "helveticaneue",
    color: "#fff",
  },
});
