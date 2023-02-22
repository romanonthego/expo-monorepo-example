import {
  authenticateAsync,
  LocalAuthenticationResult,
  getEnrolledLevelAsync,
  hasHardwareAsync,
  isEnrolledAsync,
  supportedAuthenticationTypesAsync,
  SecurityLevel,
} from "expo-local-authentication";
import { useEffect, useState } from "react";
import { CheckListScreen, Button, JSONTree } from "../../src";

export default function ExpoLocalAuthenticationScreen() {
  const [result, setResult] = useState<{
    result: LocalAuthenticationResult | undefined;
    getEnrolledLevelAsync: SecurityLevel | undefined;
    hasHardwareAsync: boolean | undefined;
    isEnrolledAsync: boolean | undefined;
    supportedAuthenticationTypesAsync: number[] | undefined;
  }>({
    result: undefined,
    getEnrolledLevelAsync: undefined,
    hasHardwareAsync: undefined,
    isEnrolledAsync: undefined,
    supportedAuthenticationTypesAsync: undefined,
  });

  useEffect(() => {
    (async () => {
      const [
        getEnrolledLevelAsyncResult,
        hasHardwareAsyncResult,
        isEnrolledAsyncResult,
        supportedAuthenticationTypesAsyncResult,
      ] = await Promise.all([
        getEnrolledLevelAsync(),
        hasHardwareAsync(),
        isEnrolledAsync(),
        supportedAuthenticationTypesAsync(),
      ]);

      setResult((result) => ({
        ...result,
        getEnrolledLevelAsync: getEnrolledLevelAsyncResult,
        hasHardwareAsync: hasHardwareAsyncResult,
        isEnrolledAsync: isEnrolledAsyncResult,
        supportedAuthenticationTypesAsync:
          supportedAuthenticationTypesAsyncResult,
      }));
    })();
  }, []);

  return (
    <CheckListScreen checkId="LOCAL_AUTHENTICATION">
      <Button
        title="authenticateAsync"
        onPress={() => {
          authenticateAsync({
            promptMessage: "Authenticate to continue",
          })
            .then((result) => setResult((value) => ({ ...value, result })))
            .catch((result) => setResult((value) => ({ ...value, result })));
        }}
      />
      <JSONTree data={result} />
    </CheckListScreen>
  );
}
