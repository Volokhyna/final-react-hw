import {SetProducts, ItemInLike, ItemInCart} from "../action-types";
import {services} from "../../services";

const {productService} = services;

export const setProducts = () => async (dispatch) => {
    const response = await productService.getProducts();
    const json = await response.json();
    dispatch({type: SetProducts, payload: json});
}

export const toggleItemInCart = (product) => ({type: ItemInCart, payload: product});
export const toggleItemInLike = (product) => ({type: ItemInLike, payload: product});
