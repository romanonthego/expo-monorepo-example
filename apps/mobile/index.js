// DEFAULT_CONFIG
// import { registerRootComponent } from 'expo';

// import App from "./__default_expo_setup/App";

// // registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// // It also ensures that whether you load the app in Expo Go or in a native build,
// // the environment is set up appropriately
// registerRootComponent(App);

// WITH ROUTER

// NOTE(EvanBacon): This file will go away in the future.
import "expo-dev-client";
import "expo-asset";
import { polyfillWebCrypto } from "expo-standard-web-crypto";
import { registerRootComponent } from "expo";
import { ExpoRoot } from "expo-router";
import * as Sentry from "sentry-expo";

Sentry.init({
  dsn: "https://0ab47312ac544cb19bd7ea8ccb7ac3dd@sentry.youhodler.com/8",
  enableInExpoDevelopment: true,
  // debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});

// https://github.com/expo/expo/tree/main/packages/expo-standard-web-crypto#using-the-polyfill
polyfillWebCrypto();

// Must be exported or Fast Refresh won't update the context
export function App() {
  // const ctx = require.context("./__checklist_expo_router/app");
  // const ctx = require.context("./__expo_router_app/app");
  const ctx = require.context("./__rewrite/app");

  return <ExpoRoot context={ctx} />;
}

const SentryWrappedApp = Sentry.Native.wrap(App);

registerRootComponent(SentryWrappedApp);
