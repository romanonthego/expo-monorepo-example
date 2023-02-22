import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ItemInfo } from "./CheckListItem";
import { getChecks, CheckItem } from "./CHECKS";

function ListItem({ item }: ListRenderItemInfo<CheckItem>) {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => {
        router.push(item.url);
      }}
      style={{
        height: 80,
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderBottomColor: "lightgrey",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Ubuntu-Bold",
            marginBottom: 8,
          }}
        >
          {item.title}
        </Text>
        <ItemInfo item={item} />
      </View>

      <View
        style={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Text
          style={{
            fontSize: 14,
          }}
        >
          {getChecks(item)}
        </Text>
      </View>
    </Pressable>
  );
}

function SectionHeader({ item }: ListRenderItemInfo<string>) {
  return (
    <View
      style={{
        height: 40,
        paddingHorizontal: 20,
        alignItems: "center",
        borderBottomColor: "lightgrey",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Text
        style={{
          fontSize: 14,
          fontFamily: "Ubuntu-Bold",
        }}
      >
        {item}
      </Text>
    </View>
  );
}

function renderItem({
  item,
  ...props
}: ListRenderItemInfo<CheckItem | string>) {
  if (typeof item === "string") {
    return <SectionHeader item={item} {...props} />;
  }

  return <ListItem item={item} {...props} />;
}

function getItemType(item: CheckItem | string) {
  return typeof item === "string" ? "sectionHeader" : "row";
}

export function CheckList({ data }: { data: Array<CheckItem | string> }) {
  const { bottom } = useSafeAreaInsets();

  const stickyHeaderIndices = data
    .map((item, index) => {
      if (typeof item === "string") {
        return index;
      } else {
        return null;
      }
    })
    .filter((item) => item !== null) as number[];

  return (
    <FlashList
      data={data}
      getItemType={getItemType}
      renderItem={renderItem}
      estimatedItemSize={80}
      contentContainerStyle={{
        paddingBottom: bottom,
      }}
      stickyHeaderIndices={stickyHeaderIndices}
    />
  );
}
