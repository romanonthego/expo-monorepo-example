import { openBrowserAsync } from "expo-web-browser";
import { CheckListScreen, Button } from "../../src";

export default function ExpoWebBrowserScreen() {
  return (
    <CheckListScreen checkId="EXPO-WEB-BROWSER">
      <Button
        title="openBrowserAsync"
        onPress={() => {
          openBrowserAsync("https://expo.dev");
        }}
      />
    </CheckListScreen>
  );
}
