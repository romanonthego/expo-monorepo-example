import { useState } from "react";
import * as Localization from "expo-localization";
import { CheckListScreen, JSONTree } from "../../src";

export default function ExpoLocalizationScreen() {
  const [value, setValue] = useState(() => Localization.getLocales());
  return (
    <CheckListScreen checkId="EXPO-LOCALIZATION" useScroll>
      <JSONTree data={value} openAll />
    </CheckListScreen>
  );
}
