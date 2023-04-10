import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite(){
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
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    }

    const onChangeContents = (event) => {
        setContents(event.target.value);
    }

    return (
        <>
            <BoardWriteUI
                onClickSubmit={onClickSubmit}
                onChangeWriter={onChangeWriter}
                onChangeTitle={onChangeTitle}
                onChangeContents={onChangeContents}
                aaa='asdf'
            />
        </>
    )
}