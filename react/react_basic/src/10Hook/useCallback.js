import {useState, useCallback} from "react";

function ChildComponent({onClick}) {
    console.log("child component");
    return <>
        <button onClick={onClick}>PLUS</button>
    </>
}


export default function UseCallback() {

    const [count, setCount] = useState(0)
    const [inputValue, setInputValue] = useState("");


    //useCallback미사용
    const plusCount = () => {
        console.log("plus", count)
        setCount((prev) => prev + 1);
    };

    //useCallback사용
    //반복해서 생성되는 이벤트 핸들러 함수를 useCallback으로 감싸줘서 함수를 메모이제이션
    const plusCounterCallback = useCallback(() => {
        console.log("plusCallback", count)
        setCount((prev) => prev + 1);
    }, []);

    const onChange = (e) => {
        setInputValue(e.target.value)
        plusCounterCallback();
    }

    return (
        <>
            <input value={inputValue} onChange={(e) => {
                setInputValue(e.target.value)
            }} />
            <ChildComponent onClick={plusCount}/>
            <p>{count}</p>
        </>
    )
};