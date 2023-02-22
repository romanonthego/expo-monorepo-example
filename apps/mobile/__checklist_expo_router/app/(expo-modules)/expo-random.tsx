import { CheckListScreen, JSONTree } from "../../src";

const array = new Uint32Array(10);

export default function ExpoRandomScreen() {
  return (
    <CheckListScreen checkId="EXPO-RANDOM">
      <JSONTree
        data={{
          getRandomValues: crypto.getRandomValues(array),
        }}
      />
    </CheckListScreen>
  );
}
