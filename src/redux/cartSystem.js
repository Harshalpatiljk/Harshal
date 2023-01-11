import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // cart: [],
    cart: localStorage.getItem("Cart") ? JSON.parse("Cart") : [],
    quantity: 0
}

const cartSystem = createSlice(
    {
        name: "user",
        initialState,
        reducers: {
            addCart: (state, action) => {
                const find = state.cart.findIndex(item => item.id === action.payload.id)
                if (find >= 0) {
                    state.cart[find].quantity += 1
                } else {

                    const tempvar = { ...action.payload, quantity: 1 }

                    state.cart.push(tempvar)
                }
                localStorage.setItem("Cart", JSON.stringify(state.cart))
            },

            removeFromCart: (state, action) => {
                const itemToRemove = state.cart.filter(
                    removeItem => removeItem.id!==action.payload.id
                );
                state.cart = itemToRemove;
            }
        }
    }
)

export const { addCart,removeFromCart } = cartSystem.actions;
export default cartSystem.reducer;