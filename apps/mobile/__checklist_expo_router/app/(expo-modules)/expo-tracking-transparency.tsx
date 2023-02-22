import { useEffect, useState } from "react";
import {
  getTrackingPermissionsAsync,
  isAvailable,
  requestTrackingPermissionsAsync,
  PermissionStatus,
} from "expo-tracking-transparency";
import { CheckListScreen, Button, Text } from "../../src";

export default function ExpoTrackingTransparencyScreen() {
  const [status, setStatus] = useState<PermissionStatus>(
    PermissionStatus.UNDETERMINED
  );

  const check = async () => {
    if (isAvailable()) {
      const { status } = await getTrackingPermissionsAsync();
      setStatus(status);
    } else {
      setStatus(PermissionStatus.UNDETERMINED);
    }
  };

  useEffect(() => {
    check();
  }, []);

  return (
    <CheckListScreen checkId="EXPO-TRACKING-TRANSPARENCY">
      <Text>status: {status}</Text>
      <Button
        onPress={() => {
          requestTrackingPermissionsAsync();
        }}
        title="requestTrackingPermissionsAsync"
      />
    </CheckListScreen>
  );
}
