import axios from 'axios';
import { useState } from 'react';

export default function RestGetPage(){

    const [title, setTitle] = useState("");

    const onClickAsync = () => {
        const result = axios.get("https://koreanjson.com/posts/1");
        console.log(result);
    }

    // async function onClickSync(){}
    const onClickSync = async () => {
        const result = await axios.get("https://koreanjson.com/posts/1");
        console.log(result);
        console.log(result.data);
        console.log(result.data.title);
        setTitle(result.data.title);
    }

    return(
        <>
            <button onClick={onClickAsync} >REST-API(async) Request</button>
            <button onClick={onClickSync} >REST-API(sync) Request</button>
            <div>{title}</div>
        </>
    )
}