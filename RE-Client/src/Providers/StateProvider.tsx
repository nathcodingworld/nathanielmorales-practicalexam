import { createContext, useState, ReactNode } from "react";

export const AdminContext = createContext({
  admin: {
    auth: false,
    token: "",
  },
  login: (token: string) => {},
  logout: () => {},
});

interface ProviderType {
  children: ReactNode;
}
const StateProvider: React.FC<ProviderType> = ({ children }) => {
  const [admin, setAdmin] = useState({ auth: false, token: "" });

  function login(token: string) {
    setAdmin({
      auth: true,
      token: token,
    });
  }
  function logout() {
    setAdmin({
      auth: false,
      token: "",
    });
  }

  const context = {
    admin,
    login,
    logout,
  };
  return <AdminContext.Provider value={context}>{children}</AdminContext.Provider>;
};

export default StateProvider;
