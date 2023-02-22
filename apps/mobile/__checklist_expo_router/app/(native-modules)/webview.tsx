import WebView from "react-native-webview";
import { CheckListScreen } from "../../src";

export default function WebviewScreen() {
  return (
    <CheckListScreen checkId="WEBVIEW">
      <WebView
        style={{
          flex: 1,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: "lightgray",
        }}
        source={{
          uri: "https://expo.io",
        }}
      />
    </CheckListScreen>
  );
}
