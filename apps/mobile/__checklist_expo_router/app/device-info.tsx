import { useEffect, useState } from "react";
import deviceInfoModule from "react-native-device-info";
import { CheckListScreen, JSONTree, Text } from "../src";

const check = (method: keyof typeof deviceInfoModule) => {
  return new Promise((resolve) => {
    // @ts-ignore
    const result = deviceInfoModule[method]();
    resolve(result);
  }).then((result) => {
    return {
      method: `${method}()`,
      result,
    };
  });
};

export default function DeviceInfoScreen() {
  const [data, setData] = useState({});

  useEffect(() => {
    Promise.all([
      check("getApplicationName"),
      check("getBaseOs"),
      check("getBuildId"),
      check("getBundleId"),
      check("getBuildNumber"),
    ]).then((results) => {
      setData(
        results.reduce<{ [key: string]: any }>((acc, result) => {
          acc[result.method] = result.result;
          return acc;
        }, {})
      );
    });
  }, []);

  return (
    <CheckListScreen checkId="DEVICE-INFO">
      <JSONTree data={data} />
    </CheckListScreen>
  );
}
