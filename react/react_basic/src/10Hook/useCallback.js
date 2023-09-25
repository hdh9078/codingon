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
        setCount(() => count + 1);
    };

    //useCallback사용
    const plusCounterCallback = useCallback(() => {
        setCount(() => count + 1);
    }, []);

    return (
        <>
            <input value={inputValue} onChange={(e) => {
                setInputValue(e.target.value)
            }} />
            <ChildComponent onClick={plusCounterCallback}/>
            <p>{count}</p>
        </>
    )
};