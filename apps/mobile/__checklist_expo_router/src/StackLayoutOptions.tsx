import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";

export const StackLayoutOptions: NativeStackNavigationOptions = {
  // headerBlurEffect: "light",
  // headerTransparent: true,

  // headerLargeTitle: true,

  // headerLargeTitleShadowVisible: true,

  headerBackTitleStyle: {
    fontFamily: "Ubuntu-Regular",
    fontSize: 16,
  },

  // freezeOnBlur: true,

  // headerTransparent: true,

  headerStyle: {
    // backgroundColor: "#fff",
  },

  headerTitleStyle: {
    fontFamily: "Ubuntu-Bold",
    fontSize: 16,
  },

  contentStyle: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "lightgray",
    backgroundColor: "white",
  },

  headerBackTitle: "Back",
};
