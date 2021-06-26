import React, { createContext, useState, useContext } from "react";
import Cookie from "js-cookie";
import axios from "axios";
import { api_login } from "../consts/apis";
import { toast } from "react-toastify";

interface IAuthContext {
  logged: boolean;
  signIn(username: string, password: string): Promise<void>;
  signOut(): void;
  loggedUser: IUser;
}

interface IUser {
  username: string;
  id: number;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const isLogged = !!Cookie.get("kabum:logged");

  const [logged, setLogged] = useState<boolean>(isLogged);

  const [loggedUser, setLoggedUser] = useState<IUser>({} as IUser);

  const signIn = async (username: string, password: string): Promise<void> => {
    await axios.post(api_login, { username, password })
      .then(res => {
        const { data } = res;
        if (data.user) {
          setLoggedUser({ ...data.user })
          Cookie.set("kabum:logged", "true");
          setLogged(true);
        } else {
          setLogged(false);
          toast.error("Usuário ou Senha incorretos!");
        }
      }).catch(err => {
        console.log(err);
        setLoggedUser({} as IUser)
      })
  };

  const signOut = () => {
    Cookie.remove("logged");
    setLogged(false);
  };

  return (
    <AuthContext.Provider value={{ logged, signIn, signOut, loggedUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext);
  return context;
};
