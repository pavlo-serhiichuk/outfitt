import {StateSchema} from "./StateSchema";
import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {allOutfitsReducer} from "@/pages/AllOutfitsPage/module/slice/allOutfitsSlice";
import {rtkApi} from "@/shared/api/rtkApi";

export function createReduxStore (
  initialState?: Partial<StateSchema>,
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    allOutfits: allOutfitsReducer,
    [rtkApi.reducerPath]: rtkApi.reducer
  }

  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState || {},
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(rtkApi.middleware),
  })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
