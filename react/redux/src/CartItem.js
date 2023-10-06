import { useDispatch } from "react-redux";
import { DELETE_CART } from "./store/cart";


export default function CartItem({ value }) {
    
    const dispatch = useDispatch();
    //filter를 사용하여 새로운 배열 반환
    const removeCart = (id) => {
        dispatch({type: DELETE_CART, id});
    };

    return (
        <div>
            <span>
                {value.name} : {value.price * value.quantity}원
            </span>
            <button onClick={() => removeCart(value.id)}>제거</button>
        </div>
    );
}