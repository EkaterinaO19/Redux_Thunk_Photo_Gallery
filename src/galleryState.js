import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getPhotos = createAsyncThunk(
    'photos/getPhotos',
    async () => {
        const response = await fetch('https://picsum.photos/v2/list?page=2&limit=10');
        const data = await response.json();
        return data;
    }
)

const gallerySlice = createSlice({
    name: 'gallery',
    initialState: {
        photos:[],
        isLoading: false
    },
    extraReducers:{
        [getPhotos.pending]: (state) => {
            state.isLoading = true;
        },
        [getPhotos.fulfilled]: (state, action) => {
            state.photos = action.payload;
            state.isLoading = false;
        },
        [getPhotos.rejected]: (state) => {
            state.isLoading = false;
        }
    }
})

export default gallerySlice.reducer;