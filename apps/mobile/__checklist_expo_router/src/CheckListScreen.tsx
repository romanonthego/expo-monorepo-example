import { Stack } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ItemInfo } from "./CheckListItem";
import { CHECKS, getChecks, getTitle, CheckItem } from "./CHECKS";

export function CheckListScreen({
  children,
  checkId,
  useScroll = false,
}: {
  checkId: string;
  children: React.ReactNode;
  useScroll?: boolean;
}) {
  const { bottom } = useSafeAreaInsets();
  const item = (CHECKS as CheckItem[]).find(
    (item) => item && item.id === checkId
  )!;

  if (!item) {
    throw new Error(`No check found for ${checkId}`);
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: getTitle(item),
          headerRight: () => <Text>{getChecks(item)}</Text>,
        }}
      />

      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 8,
          borderBottomColor: "lightgrey",
          borderBottomWidth: StyleSheet.hairlineWidth,
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <ItemInfo item={item} />
      </View>

      {!useScroll && (
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 16,
            flex: 1,
          }}
        >
          {children}
        </View>
      )}

      {useScroll && (
        <ScrollView
          style={{
            flex: 1,
            paddingHorizontal: 16,
            paddingVertical: 16,
          }}
          contentContainerStyle={{
            // flex: 1,
            paddingBottom: bottom,
          }}
        >
          {children}
        </ScrollView>
      )}
    </>
  );
}
