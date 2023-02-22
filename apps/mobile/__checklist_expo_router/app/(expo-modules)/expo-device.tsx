import * as Device from "expo-device";
import { CheckListScreen, JSONTree } from "../../src";

export default function ExpoDeviceScreen() {
  return (
    <CheckListScreen checkId="EXPO-DEVICE" useScroll>
      <JSONTree data={Device} />
    </CheckListScreen>
  );
}
