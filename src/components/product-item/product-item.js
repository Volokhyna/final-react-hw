export const ProductItem = ({OnAddToLike, OnAddToCart, isAddedLike, isAddedCart, product, product: {id, title, price}}) => {
    return (
        <div className={'product_div'}>
            <h5>{id}</h5>
            <h5>{title}</h5>
            <h5 className={'price_color'}>${price}</h5>
            <button style={{background: isAddedLike ? 'red' : 'pink'}}
                    onClick={() => OnAddToLike(product)}>
                {isAddedLike ? 'Dislike' : 'Like'}
            </button>
            <button style={{background: isAddedCart ? 'red' : 'green'}}
                    onClick={() => OnAddToCart(product)}>
                {isAddedCart ? 'Delete' : 'Add to cart'}
            </button>
        </div>
    )
};
