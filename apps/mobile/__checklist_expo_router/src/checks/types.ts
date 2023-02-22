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
