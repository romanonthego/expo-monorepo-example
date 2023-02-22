import { View } from "react-native";
import { Stack } from "expo-router";
import { CheckList } from "../src";
import { CHECKS } from "../src/CHECKS";

export default function Index() {
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
