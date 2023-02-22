import * as Device from "expo-device";
import { CheckListScreen, JSONTree } from "../src";

export default function ExpoDevice() {
  return (
    <CheckListScreen checkId="EXPO-DEVICE" useScroll>
      <JSONTree data={Device} />
    </CheckListScreen>
  );
}
