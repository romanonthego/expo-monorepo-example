import { useEffect, useState } from "react";
import _NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { CheckListScreen, JSONTree, Text } from "../src";

export default function NetInfo() {
  const [netInfo, setNetInfo] = useState<NetInfoState | null>(null);

  useEffect(() => {
    _NetInfo.fetch().then((state) => {
      setNetInfo(state);
    });

    const unsubscribe = _NetInfo.addEventListener((state) => {
      setNetInfo(state);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <CheckListScreen checkId="NETINFO" useScroll>
      <Text>NetInfoState: </Text>
      {netInfo == null && <Text>loading...</Text>}
      {netInfo !== null && <JSONTree data={netInfo} />}
    </CheckListScreen>
  );
}
