import { useState } from "react"

export default function CounterStatePage(){
    const [count, setCount] = useState(0);

    function onClickCountUp(){
        setCount(count + 1);
    }

    function onClickCountDown(){
        setCount(count - 1);
    }
    
    return (
        <>
            <div>{count}</div>
            <button onClick={onClickCountUp}>up</button>
            <button onClick={onClickCountDown}>down</button>
        </>
    )
}