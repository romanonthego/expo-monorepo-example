import { Pressable, StyleSheet, Text } from "react-native";

export function Button({
  title,
  onPress,
  children,
}: {
  title?: string;
  onPress: () => void;
  children?: React.ReactNode;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        height: 60,
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderColor: "lightgrey",
        borderWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        marginBottom: 8,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        backgroundColor: "#f9f9ff",
        opacity: pressed ? 0.8 : 1,
      })}
    >
      <Text
        style={{
          fontSize: 16,
          fontFamily: "UbuntuMono-Regular",
        }}
      >
        {title ?? children}
      </Text>
    </Pressable>
  );
}
