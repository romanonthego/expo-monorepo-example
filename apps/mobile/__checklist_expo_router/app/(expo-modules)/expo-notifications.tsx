import { useEffect, useState } from "react";
import * as Notifications from "expo-notifications";
import { CheckListScreen, JSONTree } from "../../src";

export default function ExpoNotificationsScreen() {
  const [value, setValue] = useState({});

  useEffect(() => {
    Notifications.getPermissionsAsync().then((value) =>
      setValue((v) => ({ ...v, getPermissionsAsync: value }))
    );

    // Notifications.requestPermissionsAsync().then((value) =>
    //   setValue((v) => ({ ...v, requestPermissionsAsync: value }))
    // );

    Notifications.getExpoPushTokenAsync()
      .then((value) =>
        setValue((v) => ({ ...v, getExpoPushTokenAsync: value }))
      )
      .catch((error) => {
        setValue((v) => ({ ...v, getExpoPushTokenAsync: error }));
      });

    Notifications.getDevicePushTokenAsync()
      .then((value) =>
        setValue((v) => ({ ...v, getDevicePushTokenAsync: value }))
      )
      .catch((error) => {
        setValue((v) => ({ ...v, getDevicePushTokenAsync: error }));
      });
  }, []);

  return (
    <CheckListScreen checkId="EXPO-NOTIFICATIONS" useScroll>
      <JSONTree data={value} openAll />
    </CheckListScreen>
  );
}
