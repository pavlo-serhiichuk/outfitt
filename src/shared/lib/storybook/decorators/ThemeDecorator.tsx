import React, {FC} from "react";
import {Theme} from "@/shared/types/theme";
import {ThemeContext} from "@/app/providers/ThemeProvider/ThemeContext";

export const ThemeDecorator = (theme: Theme = 'light') => (StoryComponent: FC) => (
  <ThemeContext value={{theme}}>
    <div className={theme}>
    <StoryComponent />
    </div>
  </ThemeContext>
)