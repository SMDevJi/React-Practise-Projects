import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    LOADING: 'loading',
    ERROR: 'error'
})

export const loadSearches = createAsyncThunk('book/search', async (query) => {
    const response = await fetch(`http://openlibrary.org/search.json?title=${query}`)
    return await response.json()
})

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        status: STATUSES.IDLE,
        error:null,
        results: []
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadSearches.pending, (state,action) => {
                state.status=STATUSES.LOADING
            })
            .addCase(loadSearches.rejected, (state,action) => {
                state.status=STATUSES.ERROR
                state.error=action.error
                //console.log(action.error)
            })
            .addCase(loadSearches.fulfilled, (state,action) => {
                state.status=STATUSES.IDLE
                action.payload.docs = action.payload.docs.slice(0, 20);
                state.results=action.payload
                console.log(state.results)
            })
    }
})

export default searchSlice.reducer