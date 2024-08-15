import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ThemeContext, ThemeToggleContext } from "./ThemeContext";

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);
  
  // Effect to retrieve the theme from localStorage when the component mounts
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme !== null) {
      setDarkTheme(storedTheme === "true"); // Convert string to boolean
    }
  }, []);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => {
      const newTheme = !prevDarkTheme;
      localStorage.setItem("theme", newTheme); // Persist the new theme
      return newTheme;
    });
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeToggleContext.Provider value={toggleTheme}>
        {children}
      </ThemeToggleContext.Provider>
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.any,
};
