import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchBikes = createAsyncThunk(
  'bikes/fetchBikes',
  async () => {
    const reponse = await fetch('https://6715c21033bc2bfe40bb0796.mockapi.io/thigk');
    const data = await reponse.json();
    return data;
  }
);

const bikeSlice = createSlice({
  name: 'bikes',
  initialState:{
      data: [],
      status: 'idle',
      error: null,
  },
  reducers:{
    updateBike: (state,action) =>{
      const index = state.data.findIndex(bike => bike.id === action.payload.id);
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBikes.pending, (state) =>{
        state.status = 'loading';
      })
      .addCase(fetchBikes.fulfilled, (state,action) =>{
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchBikes.rejected, (state,action) =>{
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const {updateBike} = bikeSlice.actions;
export default bikeSlice.reducer;