import React, { createContext, useContext, useEffect, useState } from "react";
import { getStoredToken, storeToken } from "../../services/auth";

interface AuthContextData {
  isAuthenticated: boolean;
  token: string | null;
  storeTokenForAuth: (token: string) => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const storedToken = getStoredToken();
    if (storedToken) {
      setToken(storedToken);
      setIsAuthenticated(true);
    }
  }, []);

  const storeTokenForAuth = (token: string) => {
    storeToken(token);
    setToken(token);
    setIsAuthenticated(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        token,
        storeTokenForAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};
