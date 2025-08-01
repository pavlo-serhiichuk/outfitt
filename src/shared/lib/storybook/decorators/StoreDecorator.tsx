import React, {FC} from "react";
import {StoreProvider} from "@/app/providers/StoreProvider/StoreProvider";
import {StateSchema} from "@/app/providers/StoreProvider/StateSchema";

export const StoreDecorator = (initialState?: StateSchema) => (StoryComponent: FC) => (
  <StoreProvider initialState={initialState}>
    <StoryComponent />
  </StoreProvider>
)