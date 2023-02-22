// import { useEffect } from "react";
import { Layout } from "expo-router";
// import { enableFreeze, enableScreens } from "react-native-screens";
import { useAuth, AuthProvider } from "../../src/state";

// enableScreens(true);
// enableFreeze(true);

export default function Root() {
  // useEffect(() => {
  //   console.log("Root mounted");

  //   return () => {
  //     console.log("Root unmounted");
  //   };
  // }, []);

  return (
    <AuthProvider>
      <RootLayout />
    </AuthProvider>
  );
}

function RootLayout() {
  const { isAuthorized } = useAuth();

  return (
    <Layout>
      <Layout.Screen name="(app)" redirect={!isAuthorized} />
      <Layout.Screen name="(auth)" redirect={isAuthorized} />
      <Layout.Children />
    </Layout>
  );
}
