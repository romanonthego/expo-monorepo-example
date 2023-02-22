import { useCallback } from "react";
import { Text } from "react-native";
import { MMKV, useMMKVNumber } from "react-native-mmkv";
import { CheckListScreen, Button } from "../src";


export const storage = new MMKV();

export default function Mmkv() {
  const [number, setNumber] = useMMKVNumber("number", storage);

  const increment = useCallback(() => {
    setNumber((n = 0) => n + 1);
  }, [setNumber]);

  const decrement = useCallback(() => {
    setNumber((n = 0) => n - 1);
  }, [setNumber]);

  return (
    <CheckListScreen checkId="MMKV">
      <Text
        style={{
          fontFamily: "UbuntuMono-Regular",
          marginBottom: 8,
        }}
      >
        MMKV number: {number}
      </Text>
      <Button onPress={increment} title="increment" />
      <Button onPress={decrement} title="decrement" />
    </CheckListScreen>
  );
}
