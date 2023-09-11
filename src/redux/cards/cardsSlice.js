import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCards,
  fetchAllCards
} from './operetions';


const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
      cards: [],
      cardsList: [],
      isLoading: false,
      error: null,
    },
    reducers: {
      changeCards(state, action){
        state.userCards.rating = action.payload;
  
    }},
    extraReducers: builder => {
      builder
        .addCase(fetchCards.pending, state => {
          state.isLoading = true;
        })
        .addCase(fetchCards.fulfilled, (state, action) => {
          state.cards = action.payload;
          state.isLoading = false;
          state.error = null;
        })
        .addCase(fetchCards.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        })
        .addCase(fetchAllCards.pending, state => {
          state.isLoading = true;
        })
        .addCase(fetchAllCards.fulfilled, (state, action) => {
          state.cardsList = action.payload;
          state.isLoading = false;
          state.error = null;
        })
        .addCase(fetchAllCards.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        })
    },
  });
  
  // export const { addReviews, deleteReviews } = reviewSlice.actions;
  export const {changeCards}=cardsSlice.actions;
  export const cadrsReducer = cardsSlice.reducer;