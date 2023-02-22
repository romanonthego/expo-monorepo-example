import { Button, CheckListScreen, Text } from "../src";
import { setStringAsync } from "expo-clipboard";
import { useState } from "react";
import { TextInput } from "react-native";

export default function ExpoClipboard() {
  const [randomString, setRandomString] = useState(
    Math.random().toString(36).substring(7)
  );

  return (
    <CheckListScreen checkId="EXPO-CLIPBOARD">
      <Text>randomString: {randomString}</Text>
      <Button
        title="randomize"
        onPress={() => {
          setRandomString(Math.random().toString(36).substring(7));
        }}
      />
      <Button
        onPress={() => {
          setStringAsync(randomString);
        }}
        title={`setString("${randomString}")`}
      />
      <Text>paste here to test clipboard</Text>
      <TextInput
        style={{
          fontSize: 16,
          fontFamily: "UbuntuMono-Regular",
          marginBottom: 8,
          padding: 16,
          // backgroundColor: "#f5f5f5",
          borderRadius: 4,
          borderWidth: 1,
          borderColor: "lightgray",
        }}
      />
    </CheckListScreen>
  );
}
