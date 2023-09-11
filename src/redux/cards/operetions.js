import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64f7247b9d77540849532ddc.mockapi.io/cars/';


export const fetchAllCards = createAsyncThunk(
    'cards/getAllCards',
    async ( _, thunkAPI) => {
      try {
        const { data } = await axios.get(`cars`);
        return data;
      } catch (e) {
        return  thunkAPI.rejectWithValue(e.message);
      }
    }
  );

  export const fetchCards = createAsyncThunk(
    'cards/getCards',
    async ( page, thunkAPI) => {
      try {
        const { data } = await axios.get(`cars?page=${1}&limit=${page*8}`);

        return data;
      } catch (e) {
        return  thunkAPI.rejectWithValue(e.message);
      }
    }
  );

