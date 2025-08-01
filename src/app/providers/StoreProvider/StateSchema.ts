import {AllOutfitsSchema} from "@/pages/AllOutfitsPage/module/types/AllOutfitsSchema"
import {rtkApi} from "@/shared/api/rtkApi"
import {AppDispatch} from "./store"

export interface StateSchema {
  allOutfits: AllOutfitsSchema
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
}

export interface ThunkConfig<T> {
  rejectValue: T
  state: StateSchema
  dispatch: AppDispatch
}
