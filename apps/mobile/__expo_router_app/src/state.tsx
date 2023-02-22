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

export const AuthProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [isAuthorized, setIsAuthorized] = React.useState(false);

  const signIn = () => {
    setIsAuthorized(true);
  };

  const signOut = () => {
    setIsAuthorized(false);
  };

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
