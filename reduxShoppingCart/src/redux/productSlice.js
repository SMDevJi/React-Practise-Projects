import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    LOADING: 'loading',
    ERROR: 'error'
})


export const loadProducts = createAsyncThunk('products/loading', async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    //console.log(data);
    return data;
})

const productSlice = createSlice({
    name: 'products',
    initialState: {
        status: STATUSES.IDLE,
        data: []
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadProducts.pending,(state)=>{
                state.status=STATUSES.LOADING
            })
            .addCase(loadProducts.fulfilled,(state,action)=>{
                state.status=STATUSES.IDLE
                state.data=action.payload
            })
            .addCase(loadProducts.rejected,(state,action)=>{
                state.status=STATUSES.ERROR
            })
    }
})



export default productSlice.reducer