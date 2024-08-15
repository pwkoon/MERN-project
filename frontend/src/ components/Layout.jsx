import PropTypes from "prop-types";
import { useThemeToggle } from "../ThemeContext";

const Layout = ({ children }) => {
  const toggleTheme = useThemeToggle();

  return (
    <>
      <div className="body-wrapper">
        <button onClick={toggleTheme}>Toggle theme</button>
        {children}
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
