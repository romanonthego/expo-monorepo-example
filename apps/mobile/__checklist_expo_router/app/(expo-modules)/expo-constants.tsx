import * as Constants from "expo-constants";
import { CheckListScreen, JSONTree } from "../../src";

export default function ExpoConstantsScreen() {
  return (
    <CheckListScreen checkId="EXPO-CONSTANTS" useScroll>
      <JSONTree data={Constants} />
    </CheckListScreen>
  );
}
