import {type Outfit} from "../../../../entities/Outfit/types/outfit";

export interface AllOutfitsSchema {
  data?: Outfit[];
  isLoading?: boolean
  error?: string | undefined
  searchValue?: string
}