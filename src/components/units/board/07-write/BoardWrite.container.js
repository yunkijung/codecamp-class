import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite(){

    const [mycolor, setMycolor] = useState(false);

    const [myFunction] = useMutation(CREATE_BOARD);
    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const onClickSubmit = async () => {
        const result = await myFunction({
            variables: {
                writer: writer,
                title: title,
                contents: contents
            }
        });
        console.log(result);
        alert(result.data.createBoard.message);
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value);
        if(event.target.value && title && contents){
            setMycolor(true);
        }
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
        if(writer && event.target.value && contents){
            setMycolor(true);
        }
    }

    const onChangeContents = (event) => {
        setContents(event.target.value);
        if(writer && title && event.target.value){
            setMycolor(true);
        }
    }

    return (
        <>
            <BoardWriteUI
                onClickSubmit={onClickSubmit}
                onChangeWriter={onChangeWriter}
                onChangeTitle={onChangeTitle}
                onChangeContents={onChangeContents}
                mycolor={mycolor}
                aaa='asdf'
            />
        </>
    )
}