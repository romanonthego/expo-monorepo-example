import { Slot } from "expo-router";
import { AuthProvider } from "../src/state";

// function RootLayout() {
//   const { isAuthorized } = useAuth();

//   return (
//     <Layout>
//       <Layout.Screen name="(app)" redirect={!isAuthorized} />
//       <Layout.Screen name="(auth)" redirect={isAuthorized} />
//       <Layout.Children />
//     </Layout>
//   );
// }

export default function Root() {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}
