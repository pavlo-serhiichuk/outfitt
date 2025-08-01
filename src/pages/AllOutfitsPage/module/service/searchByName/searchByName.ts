import {createAsyncThunk} from "@reduxjs/toolkit"
import {getOutfitsSearchValue} from "@/pages/AllOutfitsPage/module/selectors/getOutfitsSchemaSelectors"
import {ThunkConfig} from "@/app/providers/StoreProvider/StateSchema"
import {fetchOutfits} from "@/pages/AllOutfitsPage/module/service/fetchOutfits/fetchOutfits"

export const searchByName = createAsyncThunk<void, void, ThunkConfig<string>>(
  'outfits/searchByName',
  // if you type your function argument here
  async (_, {getState, dispatch}) => {
    const searchValue = getOutfitsSearchValue(getState())
    dispatch(fetchOutfits(searchValue))
  },
)