import {combineReducers} from "redux";
import cart from "./cart";
import like from "./like";
import products from "./products";

export const reducer = combineReducers({
    cart,
    like,
    products,
})
