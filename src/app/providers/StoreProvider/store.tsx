import {StateSchema} from "./StateSchema";
import {allOutfitsReducer} from "@/entities/Outfit";
import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";

export function createReduxStore (
  initialState?: Partial<StateSchema>,
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    allOutfits: allOutfitsReducer
  }

  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState || {},
  })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()