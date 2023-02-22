import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs initialRouteName="wallets">
      <Tabs.Screen
        name="wallets"
        options={{
          href: "/wallets",
        }}
      />
      <Tabs.Screen name="loans" />
      <Tabs.Screen name="hodls" />
      <Tabs.Screen name="duals" />
      <Tabs.Screen name="more" />
    </Tabs>
  );
}
