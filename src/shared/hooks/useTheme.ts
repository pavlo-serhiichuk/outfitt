import {useContext} from "react";
import {ThemeContext} from "@/app/providers/ThemeProvider/ThemeContext";
import {Theme} from "@/shared/types/theme";

export const useTheme = (): {theme: Theme, toggleTheme: () => void } => {
  const {theme, setTheme} = useContext(ThemeContext);
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme?.("light");
    } else {
      setTheme?.("dark");
    }
  }

  return {theme, toggleTheme};
}