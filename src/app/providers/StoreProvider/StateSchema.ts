import {AllOutfitsSchema} from "@/pages/AllOutfitsPage/module/types/AllOutfitsSchema";
import {rtkApi} from "@/shared/api/rtkApi";

export interface StateSchema {
  allOutfits: AllOutfitsSchema
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
}
