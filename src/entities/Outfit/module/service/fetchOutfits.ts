import {createAsyncThunk} from "@reduxjs/toolkit";
import {$api} from "@/shared/api";

export const fetchOutfits = createAsyncThunk(
  'outfits/fetchOutfits',
  // if you type your function argument here
  async (_, {rejectWithValue}) => {
    try {
    const {data} = await $api.get('/api/clothes')
    return data
    } catch (e) {
    // return rejectWithValue(e)
      return 'error'
    }
  },
)