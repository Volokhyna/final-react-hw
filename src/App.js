import {useDispatch, useSelector} from "react-redux";
import {Header} from "./components/header/header";
import {ProductList} from "./components/product-list/product-list";
import React, {useEffect} from 'react';
import {setProducts} from "./redux/action-creators/product-creator";


export default function App() {

    const {products} = useSelector(({products: {products}}) => ({products}));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setProducts());
    }, [dispatch]);

    return (
        <div>
            <Header/>
            <ProductList products={products}/>
        </div>
    );
}
