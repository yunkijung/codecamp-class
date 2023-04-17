import { ChangeEvent, useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";
import { IBoardWriteProps, IMyvariables } from "./BoardWrite.types";



export default function BoardWrite(props: IBoardWriteProps){
    const router = useRouter();

    const [mycolor, setMycolor] = useState(false);

    const [myFunction] = useMutation(CREATE_BOARD);
    const [updateBoard] = useMutation(UPDATE_BOARD);
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
        router.push(`/10-01-typescript-boards/${result.data.createBoard.number}`)
    }

    const onClickUpdate = async () => {
        
        const myvariables: IMyvariables = {
            number: Number(router.query.number)
        };
        
        if(writer) myvariables.writer = writer;
        if(title) myvariables.title = title;
        if(contents) myvariables.contents = contents;

        const result = await updateBoard({
            variables: myvariables
        })
        console.log(result);
        alert(result.data.updateBoard.message);
        router.push(`/10-01-typescript-boards/${result.data.updateBoard.number}`)
    }

    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
        setWriter(event.target.value);
        if(event.target.value && title && contents){
            setMycolor(true);
        }
    }

    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
        if(writer && event.target.value && contents){
            setMycolor(true);
        }
    }

    const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
        setContents(event.target.value);
        if(writer && title && event.target.value){
            setMycolor(true);
        }
    }

    return (
        <>
            <BoardWriteUI
                onClickUpdate={onClickUpdate}
                onClickSubmit={onClickSubmit}
                onChangeWriter={onChangeWriter}
                onChangeTitle={onChangeTitle}
                onChangeContents={onChangeContents}
                mycolor={mycolor}
                isEdit={props.isEdit}
                data={props.data}
            />
        </>
    )
}