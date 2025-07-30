import React from 'react';
import {Theme} from "@/shared/types/theme";
import {useState} from "react";
import {ThemeContext} from "@/app/providers/ThemeProvider/ThemeContext";

interface ThemeProviderProps {
  children?: React.ReactNode;
}

export function ThemeProvider ({children}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('light');

  return <ThemeContext value={{theme, setTheme}}>
    {children}
  </ThemeContext>
}