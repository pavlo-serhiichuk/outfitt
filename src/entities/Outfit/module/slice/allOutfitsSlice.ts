import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AllOutfitsSchema} from "@/entities/Outfit/module/types/AllOutfitsSchema";
import {Outfit} from "@/entities/Outfit/module/types/outfit";
import {fetchOutfits} from "@/entities/Outfit/module/service/fetchOutfits";

const initialState: AllOutfitsSchema = {}

const allOutfitsSlice = createSlice({
  name: 'allOutfits',
  initialState,
  reducers: {
    template: (state, action: PayloadAction<Outfit[]>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOutfits.pending,  (state, action: PayloadAction<Outfit>) => {
      state.isLoading = true
    })
      .addCase(fetchOutfits.fulfilled,  (state, action: PayloadAction<Outfit[]>) => {
        state.data = action.payload;
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
