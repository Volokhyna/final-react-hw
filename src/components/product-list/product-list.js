import React from 'react';
import {ProductItem} from "../product-item/product-item";
import {useDispatch, useSelector} from "react-redux";
import {toggleItemInCart, toggleItemInLike} from "../../redux/action-creators/product-creator";

export const ProductList = ({products}) => {

    const dispatch = useDispatch();

    const {like} = useSelector(({like: {like}}) => ({like}));
    const {cart} = useSelector(({cart: {cart}}) => ({cart}))

    const OnAddToLike = (product) => {
        dispatch(toggleItemInLike(product))
    };
    const OnAddToCart = (product) => {
        dispatch(toggleItemInCart(product))
    };

    return (
        <div>
            {products.map(product => (
                <ProductItem
                    isAddedLike={like.find(({id}) => id === product.id)}
                    isAddedCart={cart.find(({id}) => id === product.id)}
                    OnAddToLike={OnAddToLike}
                    OnAddToCart={OnAddToCart}
                    key={product.id} product={product}
                />
            ))}
        </div>
    )
};
