import { useEffect, useState } from "react";

import ReactNativeIdfaAaid, {
  AdvertisingInfoResponse,
  // @ts-ignore, there is a types, but something is wrong with ide
} from "@sparkfabrik/react-native-idfa-aaid";
import { CheckListScreen, JSONTree } from "../../src";

export default function IDFAScreen() {
  const [idfa, setIdfa] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    ReactNativeIdfaAaid.getAdvertisingInfo()
      .then((res: AdvertisingInfoResponse) =>
        !res.isAdTrackingLimited ? setIdfa(res.id) : setIdfa(null)
      )
      .catch((err: any) => {
        setError(err);
        return setIdfa(null);
      });
  }, []);

  return (
    <CheckListScreen checkId="IDFA">
      <JSONTree data={{ idfa, error }} />
    </CheckListScreen>
  );
}
