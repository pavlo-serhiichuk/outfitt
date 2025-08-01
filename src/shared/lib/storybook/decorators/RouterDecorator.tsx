import React, {FC} from "react";
import {BrowserRouter} from "react-router";

export const RouterDecorator = (StoryComponent: FC) => (
  <BrowserRouter>
    <StoryComponent />
  </BrowserRouter>
)