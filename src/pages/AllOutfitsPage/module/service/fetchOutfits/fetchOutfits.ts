import {createAsyncThunk} from "@reduxjs/toolkit";
// import {$api} from "@/shared/api";
import {Outfit} from "@/entities/Outfit";
import {ThunkConfig} from "@/app/providers/StoreProvider/StateSchema";
import axios from "axios";

export const fetchOutfits = createAsyncThunk<Outfit[], string | void, ThunkConfig<string>>(
  'outfits/fetchOutfitById',
  // if you type your function argument here
  async (searchValue, {rejectWithValue}) => {
    try {
    const {data} = await axios.get('http:localhost:3010/api/clothes', {params: {q: searchValue}});
    return data
    } catch (e) {
      return rejectWithValue('error')
    }
  },
)