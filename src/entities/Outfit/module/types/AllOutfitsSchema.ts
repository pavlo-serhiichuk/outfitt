import {type Outfit} from "./outfit";

export interface AllOutfitsSchema {
  data?: Outfit[];
  isLoading?: boolean
  error?: string | undefined
}