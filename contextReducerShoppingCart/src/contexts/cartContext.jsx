import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const initialState = [];

function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return [...state, action.payload];
        case 'REMOVE':
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
}

export function CartProvider({ children }) {
    const [cartState, cartDispatch] = useReducer(cartReducer, initialState);
    return (
        <CartContext.Provider value={{ cartState, cartDispatch }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}

