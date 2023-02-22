import { useRouter, useSegments } from "expo-router";
import * as React from "react";

type AuthContextType = {
  isAuthorized: boolean;
  signIn: () => void;
  signOut: () => void;
};

export const AuthContext = React.createContext<AuthContextType>({
  isAuthorized: false,
  signIn: () => {},
  signOut: () => {},
});

function useProtectedRoute(isAuthorized: boolean) {
  const segments = useSegments();
  const router = useRouter();

  React.useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !isAuthorized &&
      !inAuthGroup
    ) {
      // Redirect to the sign-in page.
      router.replace("/welcome");
    } else if (isAuthorized && inAuthGroup) {
      // Redirect away from the sign-in page.
      router.replace("/wallets");
    }
  }, [isAuthorized, segments]);
}

export const AuthProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [isAuthorized, setIsAuthorized] = React.useState(false);

  const signIn = () => {
    setIsAuthorized(true);
  };

  const signOut = () => {
    setIsAuthorized(false);
  };

  useProtectedRoute(isAuthorized);

  return (
    <AuthContext.Provider
      value={{
        isAuthorized,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
