import {StateSchema} from "@/app/providers/StoreProvider/StateSchema"

export const getOutfitsData = (state: StateSchema) => state.allOutfits?.data || []
export const getOutfitsSearchValue = (state: StateSchema) => state.allOutfits?.searchValue || ''
export const getOutfitsLoading = (state: StateSchema) => state.allOutfits?.isLoading
export const getOutfitsError = (state: StateSchema) => state.allOutfits?.error