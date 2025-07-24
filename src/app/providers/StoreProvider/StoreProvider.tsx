import React, {ReactNode} from "react";
import {Provider} from "react-redux";
import {createReduxStore} from "@/app/providers/StoreProvider/store";
import {StateSchema} from "@/app/providers/StoreProvider/StateSchema";

interface StoreProviderProps {
  children: ReactNode;
  initialState?: Partial<StateSchema>
}

export const StoreProvider = ({children, initialState}: StoreProviderProps) => {
  const store = createReduxStore(initialState)
  return (
    <Provider store={store}>{children}</Provider>
  )
}