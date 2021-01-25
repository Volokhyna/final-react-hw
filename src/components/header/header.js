import {useSelector} from "react-redux";


export const Header = (props) => {
    const {cart, like} = useSelector(({cart: {cart}, like: {like}}) =>({cart, like}));

    return (
        <header className={'header'}>
            <div className={'shop'}>Primitive shop</div>
            <div className={'rig'}>
                <div className={'like'} title={'totalLike'}>Like {like.length} </div>
                <div className={'add'} title={'totalCart'}>Cart {cart.length}</div>
            </div>
        </header>
    )
}
