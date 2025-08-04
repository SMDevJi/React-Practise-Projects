import React, { createContext, useReducer, useContext } from 'react';

const productContext = createContext();

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    LOADING: 'loading',
    ERROR: 'error'
})

const initialState = {
    status: STATUSES.IDLE,
    data: [],
    error: null
};


export async function fetchProducts(dispatch) {
    dispatch({ type: 'FETCH_START' });
    try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
    }
}


function productReducer(state, action) {
    switch (action.type) {
        case 'FETCH_START':
            return { status: STATUSES.LOADING, data: [], error: null };
        case 'FETCH_SUCCESS':
            return { status: STATUSES.IDLE, data: action.payload, error: null };
        case 'FETCH_ERROR':
            return { status: STATUSES.ERROR, data: [], error: action.payload };
        default:
            return state;
    }
}

export function ProductProvider({ children }) {
    const [productState, productDispatch] = useReducer(productReducer, initialState);
    return (
        <productContext.Provider value={{ productState, productDispatch }}>
            {children}
        </productContext.Provider>
    );
}

export function useProduct() {
    return useContext(productContext);
}
