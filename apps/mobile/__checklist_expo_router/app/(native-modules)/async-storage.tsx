import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CheckListScreen, JSONTree } from "../../src";

async function save(key: string, value: string) {
  await AsyncStorage.setItem(key, value);
}

async function getValueFor(key: string) {
  return await AsyncStorage.getItem(key);
}

const key = "demo-key";

export default function AsycnStorageScreen() {
  const [value, onChangeValue] = useState<string | null>(null);

  useEffect(() => {
    getValueFor(key).then((value) => {
      onChangeValue(value);

      const n = value !== null ? Number(value) : 0;

      save(key, String(n >= 10 ? 0 : n + 1)).then(() => {
        getValueFor(key).then((value) => {
          onChangeValue(value);
        });
      });
    });
  }, []);

  return (
    <CheckListScreen checkId="ASYNC-STORAGE" useScroll>
      <JSONTree data={{ key, value: `value is "${value}"` }} />
    </CheckListScreen>
  );
}
