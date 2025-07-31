import {createAsyncThunk} from "@reduxjs/toolkit";
import {$api} from "@/shared/api";
import {Outfit} from "@/entities/Outfit";
import {ThunkConfig} from "@/app/providers/StoreProvider/StateSchema";

export const fetchOutfits = createAsyncThunk<Outfit[], string | void, ThunkConfig<string>>(
  'outfits/fetchOutfitById',
  // if you type your function argument here
  async (searchValue) => {
    try {
    const {data} = await $api.get('/api/clothes', {params: {q: searchValue, _order: 'desc'}});
    return data
    } catch (e) {
    // return rejectWithValue(e)
      return 'error'
    }
  },
)