import * as Application from "expo-application";
import { CheckListScreen, JSONTree } from "../../src";

export default function ExpoApplicationScreen() {
  return (
    <CheckListScreen checkId="EXPO-APPLICATION" useScroll>
      <JSONTree data={Application} />
    </CheckListScreen>
  );
}
