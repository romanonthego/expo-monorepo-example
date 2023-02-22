import { requestReview } from "expo-store-review";
import { useState } from "react";
import { Button, CheckListScreen, JSONTree, Text } from "../src";

export default function StoreReview() {
  const [result, setResult] = useState<any>({});

  return (
    <CheckListScreen checkId="STORE-REVIEW">
      <Button
        onPress={() => {
          requestReview()
            .then((res) => {
              setResult(res);
            })
            .catch((err) => {
              setResult(err);
            });
        }}
        title="requestReview"
      />
      <JSONTree data={result} />
    </CheckListScreen>
  );
}
