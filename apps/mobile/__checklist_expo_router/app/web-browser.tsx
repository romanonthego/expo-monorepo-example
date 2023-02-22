import { openBrowserAsync } from "expo-web-browser";
import { CheckListScreen, Button } from "../src";

export default function WebBrowser() {
  return (
    <CheckListScreen checkId="WEB_BROWSER">
      <Button
        title="openBrowserAsync"
        onPress={() => {
          openBrowserAsync("https://expo.dev");
        }}
      />
    </CheckListScreen>
  );
}
