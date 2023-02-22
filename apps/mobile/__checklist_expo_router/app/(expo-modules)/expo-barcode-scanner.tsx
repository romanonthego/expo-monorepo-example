import { BarCodeScanner, BarCodeEvent } from "expo-barcode-scanner";
import { useEffect, useState } from "react";
import { View } from "react-native";
import deviceInfoModule from "react-native-device-info";
import { Button, CheckListScreen, JSONTree, Text } from "../../src";

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

export default function ExpoBarcodeScannerScreen() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }: BarCodeEvent) => {
    setScanned(true);
    setData({ type, data });
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <CheckListScreen checkId="EXPO-BARCODE-SCANNER">
      <View style={{ flex: 1 }}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{
            flex: 1,
            marginBottom: 16,
            width: "100%",
            backgroundColor: "black",
          }}
          barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
        />

        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      </View>
      <View style={{ flex: 1 }}>
        <JSONTree
          data={{
            data,
            hasPermission,
          }}
        />
      </View>
    </CheckListScreen>
  );
}
