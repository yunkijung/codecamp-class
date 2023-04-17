import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';
import { IMutation, IMutationCreateBoardArgs } from '../../src/commons/types/generated/types';

const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String){ #Data type
        createBoard(writer: $writer, title: $title, contents: $contents){ #Variables
            _id
            number
            message  
        }
    }

`

export default function GraphqlMutationPage(){

    const [myFunction] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(CREATE_BOARD);

    const [writer, setWriter] = useState<string>("");
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
        alert(result.data?.createBoard?.message);
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

    return(
        <>
            Writer: <input type="text"  onChange={onChangeWriter} /><br/>
            Title: <input type="text"  onChange={onChangeTitle} /><br/>
            Contents: <input type="text"  onChange={onChangeContents} /><br/>
            <button onClick={onClickSubmit}>GRAPHQL-API(sync) REQUEST</button>
        </>
    )
}