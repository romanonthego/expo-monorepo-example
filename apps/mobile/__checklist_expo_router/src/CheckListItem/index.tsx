import { StyleSheet, Text, View } from "react-native";
import { CheckItem } from "../CHECKS";

export function ItemInfo({ item }: { item: CheckItem }) {
  return (
    <View>
      <Text
        style={{
          fontSize: 12,
          fontFamily: "Ubuntu-Regular",
          marginBottom: 4,
        }}
      >
        {item.description}
      </Text>

      <View
        style={{
          padding: 4,
          backgroundColor: "#f5f5f5",
          borderRadius: 4,
        }}
      >
        <Text
          style={{
            fontSize: 12,
            fontFamily: "UbuntuMono-Regular",
          }}
        >
          {item.nativeModuleName}
          {item.nativeModuleVersion}
        </Text>
      </View>
    </View>
  );
}
