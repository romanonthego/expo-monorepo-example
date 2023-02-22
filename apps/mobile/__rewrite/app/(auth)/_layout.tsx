import { Stack } from "expo-router";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "welcome",
};

export default function Auth() {
  return <Stack initialRouteName="welcome" />;
}
