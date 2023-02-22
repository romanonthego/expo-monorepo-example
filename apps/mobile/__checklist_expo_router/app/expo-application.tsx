import * as Application from "expo-application";
import { CheckListScreen, JSONTree } from "../src";

export default function ExpoApplication() {
  return (
    <CheckListScreen checkId="EXPO-DEVICE" useScroll>
      <JSONTree data={Application} />
    </CheckListScreen>
  );
}
