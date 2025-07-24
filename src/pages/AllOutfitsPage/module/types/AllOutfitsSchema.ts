import {type Outfit} from "../../../../entities/Outfit/types/outfit";

export interface AllOutfitsSchema {
  allOutfits?: Outfit[];
  isLoading?: boolean
  error?: string | undefined
}