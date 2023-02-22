import { requestReview } from "expo-store-review";
import { useState } from "react";
import { Button, CheckListScreen, JSONTree } from "../../src";

export default function ExpoStoreReviewScree() {
  const [result, setResult] = useState<any>({});

  return (
    <CheckListScreen checkId="EXPO-STORE-REVIEW">
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
