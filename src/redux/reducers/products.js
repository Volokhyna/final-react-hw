import {SetProducts} from "../action-types";

const initialState = {
    products: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SetProducts: {
            return {...state, products: action.payload}
        }
        default: {
           return state;
        }
    }
}
