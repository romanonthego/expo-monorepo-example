import { EXPO_PACKAGES_CHECKS } from "./EXPO_PACKAGES_CHECKS";
import { NATIVE_MODULES_CHECKS } from "./NATIVE_MODULES_CHECKS";
import { MISC_CHECKS } from "./MISC_CHECKS";
import { ANALYTICS_CHECKS } from "./ANALYTICS";
import { type CheckItem } from "./types";

export const CHECKS: Array<CheckItem | string> = [
  ...EXPO_PACKAGES_CHECKS,
  ...NATIVE_MODULES_CHECKS,
  ...ANALYTICS_CHECKS,
  ...MISC_CHECKS,
];
