import {createStore} from "redux"


export const ADD_CART = 'add';
export const DELETE_CART = 'delete';

const reducer1 = (state = [], action) => {
    switch (action.type) {
        case ADD_CART:
            //findUndex는 배열의 index값을 찾아주며 존재하지 않는다면 -1반환, 존재할 시 해당 index반환
            const findIndex = state.findIndex((e) => e. id === action.product.id);
            return [action.product, ...state];
        case DELETE_CART:
            const eliminate = state.filter((el) => el.id !== action.id);
            return eliminate;
        default:
            return [state, {...action.product, quantity: 1}];
    }
}

const cartStore = createStore(reducer1);

export default cartStore;