import { BlurView } from "expo-blur";
import { Image, StyleSheet } from "react-native";
import { CheckListScreen, Text } from "../../src";

const uri =
  "https://s3.amazonaws.com/exp-icon-assets/ExpoEmptyManifest_192.png";

export default function ExpoBlurScreen() {
  return (
    <CheckListScreen checkId="EXPO-BLUR">
      <Image style={[StyleSheet.absoluteFill]} source={{ uri }} />
      <BlurView
        intensity={50}
        tint="light"
        style={{
          padding: 24,
        }}
      >
        <Text>BlurTint: light</Text>
      </BlurView>

      <BlurView
        intensity={50}
        tint="dark"
        style={{
          padding: 24,
          marginTop: 24,
        }}
      >
        <Text>BlurTint: dark</Text>
      </BlurView>

      <BlurView
        intensity={50}
        tint="default"
        style={{
          padding: 24,
          marginTop: 24,
        }}
      >
        <Text>BlurTint: default</Text>
      </BlurView>
    </CheckListScreen>
  );
}
