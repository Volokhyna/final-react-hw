import {ItemInCart} from "../action-types";

const initialState = {
    cart: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ItemInCart: {
            const updatedCart = state.cart.filter(
                el => el.id !== action.payload.id
            );
            if (updatedCart.length === state.cart.length) {
                updatedCart.push(action.payload);
            }
            return {...state, cart: updatedCart};
        }
        default: {
            return state;
        }
    }
}
