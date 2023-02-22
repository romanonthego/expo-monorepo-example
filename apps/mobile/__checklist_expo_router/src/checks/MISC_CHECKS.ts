import { type CheckItem } from "./types";
import { findVersion } from "./utils";

export const MISC_CHECKS: Array<CheckItem | string> = [
  "etc",
  {
    id: "FONTS",
    url: "/fonts",
    title: "Fonts",
    description: "custom fonts",
    checkedIos: "checked",
    checkedAndroid: "checked",
    nativeModuleName: "react-native",
    nativeModuleVersion: findVersion("react-native"),
  },
  {
    id: "HERMES",
    url: "/hermes",
    title: "Hermes",
    description: "Hermes JavaScript engine",
    checkedIos: "checked",
    checkedAndroid: "checked",
    nativeModuleName: "react-native",
    nativeModuleVersion: findVersion("react-native"),
  },
  {
    id: "QR-CODE",
    url: "/qr-code",
    title: "QR Code",
    description: "QR Code",
    checkedIos: "checked",
    checkedAndroid: "checked",
    nativeModuleName: "expo-qr-code",
    nativeModuleVersion: findVersion("react-native-qrcode-svg"),
  },
];
