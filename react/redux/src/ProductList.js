import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {ADD_CART, DELETE_CART} from "./store/cart";

export default function ProductList() {


    const products = [
        {
            id: 1,
            name: '맥도날드',
            price: 30,
        },
        {
            id: 2,
            name: '맘스터치',
            price: 3000,
        },
        {
            id: 3,
            name: '킹데리아',
            price: 8000,
        },
    ];
    const dispatch = useDispatch();

    const addProduct = (product) => {
        dispatch({type: ADD_CART, product});
    };

    return (
        <div>
            <h2>상품리스트</h2>
            {products.map((value) => {
                return (
                    
                    <div key={value.id}>
                        <span>
                            {value.name} : {value.price}원
                        </span>
                        <button onClick={() => addProduct(value)}>장바구니에 추가</button>
                    </div>
                    
                    
                );
            })}
        </div>
    );
}