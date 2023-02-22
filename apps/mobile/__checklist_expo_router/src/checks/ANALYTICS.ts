import { type CheckItem } from "./types";
import { findVersion } from "./utils";

export const ANALYTICS_CHECKS: Array<CheckItem | string> = [
  "analytics and 3rd party",
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
  {
    id: "SEGMENT",
    url: "/segment",
    title: "Segment",
    description: "Segment",
    checkedIos: "checked",
    checkedAndroid: "checked",
    nativeModuleName: "@segment/analytics-react-native",
    nativeModuleVersion: findVersion("@segment/analytics-react-native"),
  },
];
