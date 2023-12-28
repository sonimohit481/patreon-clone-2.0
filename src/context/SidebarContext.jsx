import React, { createContext, useState } from "react";

export const SidebarContext = createContext(null);

export const SidebarProvider = ({ children }) => {

  return <SidebarContext.Provider  value={useState("My page")} >{children}</SidebarContext.Provider>;
};
