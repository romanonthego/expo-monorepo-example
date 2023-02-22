import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StackLayoutOptions } from "../src";

export default function Auth() {
  return (
    <>
      <StatusBar animated style="dark" />
      <Stack screenOptions={StackLayoutOptions} />
    </>
  );
}
