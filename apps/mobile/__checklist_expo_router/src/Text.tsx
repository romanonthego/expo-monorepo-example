import React from "react";
import { Text as NativeText } from "react-native";

export function Text({ children }: { children: React.ReactNode }) {
  return (
    <NativeText
      style={{
        fontSize: 16,
        fontFamily: "UbuntuMono-Regular",
        marginBottom: 8,
      }}
    >
      {children}
    </NativeText>
  );
}
