import pkg from "../../package.json";
// import {} from 'expo-device'

const findVersion = (name: string) => {
  // @ts-ignore
  const match = pkg?.dependencies?.[name]?.match(/(\d+\.\d+\.\d+)/);
  return match ? `@${match[1]}` : "";
};

export type CheckItem = {
  id: string;
  url: string;
  title: string;
  description: string;
  checkedIos: "checked" | "unchecked" | "not-applicable";
  checkedAndroid: "checked" | "unchecked" | "not-applicable";
  nativeModuleName: string;
  nativeModuleVersion: string;
};

function getCheck(check: "checked" | "unchecked" | "not-applicable"): string {
  if (check === "checked") {
    return "🟢";
  }

  if (check === "unchecked") {
    return "🟡";
  }

  return "⚪";
}

export function getChecks(item: CheckItem) {
  return `${getCheck(item.checkedIos)} ${getCheck(item.checkedAndroid)}`;
}

export function getTitle(item: CheckItem) {
  return item.title;
}

const EXPO_PACKAGES_CHECKS: Array<CheckItem | string> = [
  "expo modules",
  {
    id: "HAPTICS",
    url: "/haptics",
    title: "Haptics",
    description: "Haptic feedback",
    checkedIos: "checked",
    checkedAndroid: "unchecked",
    nativeModuleName: "expo-haptics",
    nativeModuleVersion: findVersion("expo-haptics"),
  },
  {
    id: "LOCAL_AUTHENTICATION",
    url: "/local-authentication",
    title: "Local Authentication",
    description: "Biometrics",
    checkedIos: "checked",
    checkedAndroid: "checked",
    nativeModuleName: "expo-local-authentication",
    nativeModuleVersion: findVersion("expo-local-authentication"),
  },
  {
    id: "WEB_BROWSER",
    url: "/web-browser",
    title: "Web Browser",
    description: "Web Browser",
    checkedIos: "checked",
    checkedAndroid: "checked",
    nativeModuleName: "expo-web-browser",
    nativeModuleVersion: findVersion("expo-web-browser"),
  },
  {
    id: "EXPO-AV",
    url: "/expo-av",
    title: "Expo AV",
    description: "Audio and Video",
    checkedIos: "checked",
    checkedAndroid: "checked",
    nativeModuleName: "expo-av",
    nativeModuleVersion: findVersion("expo-av"),
  },
  {
    id: "TRACKING-TRANSPARENCY",
    url: "/tracking-transparency",
    title: "Tracking Transparency",
    description: "Tracking Transparency (ios only)",
    checkedIos: "checked",
    checkedAndroid: "not-applicable",
    nativeModuleName: "expo-tracking-transparency",
    nativeModuleVersion: findVersion("expo-tracking-transparency"),
  },
  {
    id: "STORE-REVIEW",
    url: "/store-review",
    title: "Store Review",
    description: "Store Review",
    checkedIos: "checked",
    checkedAndroid: "unchecked",
    nativeModuleName: "expo-store-review",
    nativeModuleVersion: findVersion("expo-store-review"),
  },
  {
    id: "EXPO-CONSTANTS",
    url: "/expo-constants",
    title: "Constants",
    description: "Constants",
    checkedIos: "checked",
    checkedAndroid: "checked",
    nativeModuleName: "expo-constants",
    nativeModuleVersion: findVersion("expo-constants"),
  },
  {
    id: "EXPO-DEVICE",
    url: "/expo-device",
    title: "Device",
    description: "Device",
    checkedIos: "checked",
    checkedAndroid: "checked",
    nativeModuleName: "expo-device",
    nativeModuleVersion: findVersion("expo-device"),
  },
  {
    id: "EXPO-APPLICATION",
    url: "/expo-application",
    title: "Application",
    description: "Application",
    checkedIos: "checked",
    checkedAndroid: "checked",
    nativeModuleName: "expo-application",
    nativeModuleVersion: findVersion("expo-application"),
  },
  {
    id: "EXPO-RANDOM",
    url: "/expo-random",
    title: "Random",
    description: "Random",
    checkedIos: "checked",
    checkedAndroid: "checked",
    nativeModuleName: "expo-random",
    nativeModuleVersion: findVersion("expo-random"),
  },
  {
    id: "EXPO-BLUR",
    url: "/expo-blur",
    title: "Blur",
    description: "Blur view (works on ios only)",
    checkedIos: "checked",
    checkedAndroid: "not-applicable",
    nativeModuleName: "expo-blur",
    nativeModuleVersion: findVersion("expo-blur"),
  },
  {
    id: "EXPO-CLIPBOARD",
    url: "/expo-clipboard",
    title: "Clipboard",
    description: "Clipboard",
    checkedIos: "checked",
    checkedAndroid: "checked",
    nativeModuleName: "expo-clipboard",
    nativeModuleVersion: findVersion("expo-clipboard"),
  },
];

const NATIVE_MODULES_CHECKS: Array<CheckItem | string> = [
  "native modules",
  {
    id: "WEBVIEW",
    url: "/webview",
    title: "Web View",
    description: "Web View component",
    checkedIos: "checked",
    checkedAndroid: "checked",
    nativeModuleName: "react-native-webview",
    nativeModuleVersion: findVersion("react-native-webview"),
  },
  {
    id: "MMKV",
    url: "/mmkv",
    title: "MMKV",
    description: "MMKV persistent storage",
    checkedIos: "checked",
    checkedAndroid: "checked",
    nativeModuleName: "react-native-mmkv",
    nativeModuleVersion: findVersion("react-native-mmkv"),
  },
  {
    id: "SVG",
    url: "/svg",
    title: "SVG",
    description: "SVG support",
    checkedIos: "checked",
    checkedAndroid: "checked",
    nativeModuleName: "react-native-svg",
    nativeModuleVersion: findVersion("react-native-svg"),
  },
  {
    id: "PDF",
    url: "/pdf",
    title: "PDF",
    description: "PDF",
    checkedIos: "checked",
    checkedAndroid: "checked",
    nativeModuleName: "react-native-pdf",
    nativeModuleVersion: findVersion("react-native-pdf"),
  },
  {
    id: "REANIMATED",
    url: "/reanimated",
    title: "Reanimated",
    description: "Reanimated",
    checkedIos: "checked",
    checkedAndroid: "checked",
    nativeModuleName: "react-native-reanimated",
    nativeModuleVersion: findVersion("react-native-reanimated"),
  },
  {
    id: "GESTURE-HANDLER",
    url: "/gesture-handler",
    title: "Gesture Handler",
    description: "Gesture Handler",
    checkedIos: "checked",
    checkedAndroid: "checked",
    nativeModuleName: "react-native-gesture-handler",
    nativeModuleVersion: findVersion("react-native-gesture-handler"),
  },
  {
    id: "SHARE",
    url: "/share",
    title: "Share",
    description: "Share",
    checkedIos: "checked",
    checkedAndroid: "checked",
    nativeModuleName: "react-native-share",
    nativeModuleVersion: findVersion("react-native-share"),
  },
  {
    id: "NETINFO",
    url: "/netinfo",
    title: "NetInfo",
    description: "NetInfo",
    checkedIos: "checked",
    checkedAndroid: "checked",
    nativeModuleName: "@react-native-community/netinfo",
    nativeModuleVersion: findVersion("@react-native-community/netinfo"),
  },
  {
    id: "DEVICE-INFO",
    url: "/device-info",
    title: "Device Info",
    description: "Device Info",
    checkedIos: "checked",
    checkedAndroid: "checked",
    nativeModuleName: "react-native-device-info",
    nativeModuleVersion: findVersion("react-native-device-info"),
  },
];

const ETC_CHECKS: Array<CheckItem | string> = [
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
  {
    id: "SENTRY",
    url: "/sentry",
    title: "Sentry",
    description: "Sentry",
    checkedIos: "checked",
    checkedAndroid: "checked",
    nativeModuleName: "sentry-expo",
    nativeModuleVersion: findVersion("sentry-expo"),
  },
];

export const CHECKS: Array<CheckItem | string> = [
  ...EXPO_PACKAGES_CHECKS,
  ...NATIVE_MODULES_CHECKS,
  ...ETC_CHECKS,
];
