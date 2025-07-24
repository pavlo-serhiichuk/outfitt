import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {type AllOutfitsSchema} from "../types/AllOutfitsSchema";
import {Outfit} from "../../../../entities/Outfit/types/outfit";
import {fetchOutfits} from "../service/fetchOutfits/fetchOutfits";

const initialState: AllOutfitsSchema = {}

const allOutfitsSlice = createSlice({
  name: 'allOutfits',
  initialState,
  reducers: {
    template: (state, action: PayloadAction<Outfit[]>) => {
      state.allOutfits = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOutfits.pending,  (state, action: PayloadAction<Outfit>) => {
      state.isLoading = true
    })
      .addCase(fetchOutfits.fulfilled,  (state, action: PayloadAction<Outfit[]>) => {
        state.allOutfits = action.payload;
        state.isLoading = false
      })
      .addCase(fetchOutfits.rejected,  (state, action: PayloadAction<any>) => {
        state.error = action.payload;
      })
  }
})

export const {
  actions: allOutfitsActions,
  reducer: allOutfitsReducer
} = allOutfitsSlice
