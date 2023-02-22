import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { CheckListScreen, JSONTree } from "../../src";

async function save(key: string, value: string) {
  await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key: string) {
  return await SecureStore.getItemAsync(key);
}

const key = "demo-key";

export default function ExpoSecureStoreScreen() {
  const [value, onChangeValue] = useState<string | null>(null);

  useEffect(() => {
    getValueFor(key).then((value) => {
      onChangeValue(value);

      if (value !== null) {
        const n = Number(value);

        save(key, String(n >= 10 ? 0 : n + 1)).then(() => {
          getValueFor(key).then((value) => {
            onChangeValue(value);
          });
        });
      }
    });
  }, []);

  return (
    <CheckListScreen checkId="EXPO-SECURE-STORE" useScroll>
      <JSONTree data={{ key, value: `value is "${value}"` }} />
    </CheckListScreen>
  );
}
