import { Text } from "react-native";
import { CheckListScreen } from "../../src";

// @ts-expect-error
const isHermes = () => !!global.HermesInternal;

export default function HermesScreen() {
  return (
    <CheckListScreen checkId="HERMES">
      <Text
        style={{
          fontSize: 16,
          fontFamily: "UbuntuMono-Regular",
          marginBottom: 8,
        }}
      >
        isHermes: {isHermes().toString()}
      </Text>
    </CheckListScreen>
  );
}
