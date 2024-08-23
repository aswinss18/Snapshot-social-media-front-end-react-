import { createContext, useReducer, useEffect } from "react";
import AuthReducer from "./AuthReducer";
const INITIAL_STATE = {
  user: {
    _id: "66c04dcde8de8c5538033116",
    profilePicture: "person/2.jpeg",
    coverPicture: "",
    followers: [],
    followings: [],
    isAdmin: false,
    username: "Aswin",
    email: "kae@gmail.com",
    password: "$2b$10$Cp8qJ3gTo/ufLKC5o3Z7yOGIA7WQbIYGSJ77tONIiJEDVgvU4Ru8a",
  },
  isFetching: false,
  error: false,
};
export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
