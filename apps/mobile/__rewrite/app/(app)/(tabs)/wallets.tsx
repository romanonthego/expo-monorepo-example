import { MockScreen } from "../../../src";
import { Freeze } from "react-freeze";
import { useNavigation, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";

export default function Wallets() {
  return (
    <MockScreen
      title="Wallets"
      links={[
        {
          title: "btc",
          to: "/wallets/btc",
        },
      ]}
    />
  );
}
