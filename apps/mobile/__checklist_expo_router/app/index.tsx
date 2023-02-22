import { View } from "react-native";
import { Stack } from "expo-router";
import { CheckList, CHECKS } from "../src";

export default function IndexScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          title: "Check List",
        }}
      />
      <CheckList data={CHECKS} />
    </View>
  );
}
