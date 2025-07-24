export {allOutfitsActions, allOutfitsReducer} from '@/pages/AllOutfitsPage/module/slice/allOutfitsSlice'
export {Outfit} from '@/entities/Outfit/types/outfit'
export {type AllOutfitsSchema} from '@/pages/AllOutfitsPage/module/types/AllOutfitsSchema'
export {
  getOutfitsData,
  getOutfitsLoading,
  getOutfitsError,
} from '@/pages/AllOutfitsPage/module/selectors/getOutfitsSchemaSelectors'
export {OutfitList} from '@/pages/AllOutfitsPage/ui/OutfitList/OutfitList'
export {OutfitListItem} from '@/pages/AllOutfitsPage/ui/OutfitListItem/OutfitListItem'