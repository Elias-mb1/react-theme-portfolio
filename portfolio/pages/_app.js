import { useEffect } from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { state } = useTheme();

  useEffect(() => {
    if (state.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [state.theme]);

  return <Component {...pageProps} />;
}

export default ({ Component, pageProps }) => (
  <ThemeProvider>
    <MyApp Component={Component} pageProps={pageProps} />
  </ThemeProvider>
);
