import React, { useContext } from "react";

const ThemeContext = React.createContext();
const ThemeToggleContext = React.createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  return useContext(ThemeContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export function useThemeToggle() {
  return useContext(ThemeToggleContext);
}

export { ThemeContext, ThemeToggleContext };
