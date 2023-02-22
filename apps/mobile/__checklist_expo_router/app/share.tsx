import { useState } from "react";
import Share from "react-native-share";
import { ShareOpenResult } from "react-native-share/lib/typescript/types";
import { Button, CheckListScreen, JSONTree } from "../src";

export default function ShareScreen() {
  const [result, setResult] = useState<any>({});

  return (
    <CheckListScreen checkId="SHARE">
      <Button
        title="Share.open"
        onPress={() => {
          Share.open({
            title: "Share test",
            message: "Share test",
          })
            .then((res) => {
              setResult(res);
            })
            .catch((err) => {
              setResult(err);
            });
        }}
      />
      <JSONTree data={result} />
    </CheckListScreen>
  );
}
