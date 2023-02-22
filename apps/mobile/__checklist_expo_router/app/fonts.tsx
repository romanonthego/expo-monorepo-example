import { Text, View } from "react-native";
import { CheckListScreen } from "../src";

export default function Fonts() {
  return (
    <CheckListScreen checkId="FONTS">
      {[
        "Ubuntu-Bold",
        "Ubuntu-BoldItalic",
        "Ubuntu-Italic",
        "Ubuntu-Light",
        "Ubuntu-LightItalic",
        "Ubuntu-Medium",
        "Ubuntu-MediumItalic",
        "Ubuntu-Regular",
        "UbuntuMono-Bold",
        "UbuntuMono-Regular",
      ].map((name) => {
        return (
          <Text
            key={name}
            style={{
              fontSize: 16,
              fontFamily: name,
              marginBottom: 8,
            }}
          >
            {name}
          </Text>
        );
      })}
    </CheckListScreen>
  );
}
