import { useState } from "react";
import styled from "styled-components";


const _Btn = styled.button`
    background-color: ${props => props.clicked ? "red" : "blue"};
    color: ${props => props.clicked ? "black" : "white"};
    padding:10px;
    cursor: pointer;
`


export default function StylePrac() {
    const [clicked, setClicked] = useState(false);
    const onClick = () => {
        setClicked(!clicked);
    };

    return (
        <>
            <_Btn onClick={onClick} clicked={clicked}>버튼</_Btn>
        </>
    )
}