import { useState } from "react";
import { CheckListScreen, JSONTree } from "../../src";
import {
  createClient,
  DeactivableLoggerType,
} from "@segment/analytics-react-native";
import { MixpanelPlugin } from "@segment/analytics-react-native-plugin-mixpanel";
import { AdvertisingIdPlugin } from "@segment/analytics-react-native-plugin-advertising-id";
import { IdfaPlugin } from "@segment/analytics-react-native-plugin-idfa";

const createSegmentClient = (logger: DeactivableLoggerType) => {
  const segmentClient = createClient({
    // dev key, not to worry
    writeKey: "1Y5ARn63es3IIcoVmtMZAtoypz3EnBlj",
    collectDeviceId: true,
    debug: true,
    trackAppLifecycleEvents: true,
    autoAddSegmentDestination: false,

    logger,
  });

  return segmentClient;
};

export default function SegmentScreen() {
  const [logs, setLogs] = useState<any[]>([]);

  const [client] = useState(() => {
    const client = createSegmentClient({
      disable: () => {},
      enable: () => {},
      error: (message, ...args) =>
        setLogs((logs) => [...logs, { level: "error", message, args }]),
      info: (message, ...args) =>
        setLogs((logs) => [...logs, { level: "info", message, args }]),
      warn: (message, ...args) =>
        setLogs((logs) => [...logs, { level: "warn", message, args }]),
    });

    client.add({ plugin: new AdvertisingIdPlugin() });
    client.add({ plugin: new IdfaPlugin() });

    client.add({
      plugin: new MixpanelPlugin(),
    });

    return client;
  });

  return (
    <CheckListScreen checkId="SEGMENT" useScroll>
      <JSONTree data={{ client, logs }} />
    </CheckListScreen>
  );
}
