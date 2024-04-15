import { useTheme } from "./ThemeContext";

function Theme_Toggle() {
  const { state, dispatch } = useTheme();

  return (
    <div className="dark: dark:bg-gray-800 dark:text-gray-300">
      {state.theme === "dark" ? (
        <button
          onClick={() => {
            dispatch({
              type: "TOGGLE_THEME",
              theme: "light",
            });
          }}
        >
          Lightmode
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch({
              type: "TOGGLE_THEME",
              theme: "dark",
            });
          }}
        >
          Darkmode
        </button>
      )}
    </div>
  );
}
export default Theme_Toggle;
