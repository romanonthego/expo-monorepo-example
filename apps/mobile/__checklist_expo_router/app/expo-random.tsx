import { CheckListScreen, Text } from "../src";

const array = new Uint32Array(10);

export default function ExpoRandomScreen() {
  return (
    <CheckListScreen checkId="EXPO-RANDOM">
      <Text>{crypto.getRandomValues(array)}</Text>
    </CheckListScreen>
  );
}
