import { useTheme } from "../../hooks/useTheme";
import "./ThemeSelector.css";
import modeIcon from "../../assets/mode-icon.svg";

const themecolors = ["#58249c", "#249c6b", "#b70233"];

const ThemeSelector = () => {
  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };
  const { changeColor, changeMode, mode } = useTheme();
  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          src={modeIcon}
          alt="toggle"
          onClick={toggleMode}
          style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
        />
      </div>
      <div className="theme-buttons">
        {themecolors.map((color) => (
          <div
            key={color}
            onClick={() => {
              changeColor(color);
            }}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
