import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  return <AuthContext.Provider >{children}</AuthContext.Provider>;
};
