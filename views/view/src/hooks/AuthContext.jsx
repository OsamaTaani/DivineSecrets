// import React, { createContext, useContext, useState } from "react";

// // Create a context
// export const AuthContext = createContext();

// // Create an AuthProvider component
// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const login = (token) => {
//     //if
//     localStorage.setItem("token", token);
//     setIsAuthenticated(true);
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     setIsAuthenticated(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Create a custom hook for using the context
// export const useAuth = () => {
//   return useContext(AuthContext);
// };
