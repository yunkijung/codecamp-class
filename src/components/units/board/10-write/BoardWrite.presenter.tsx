//import { BlueButton, RedInput } from "./BoardWrite.styles";

import * as QQQ from './BoardWrite.styles';
import { IBoardWriteUIProps } from './BoardWrite.types';



export default function BoardWriteUI(props: IBoardWriteUIProps){
    return (
        <>
            <div>{props.isEdit ? "Edit" : "Create"}</div>
            Writer: <QQQ.RedInput type="text"  onChange={props.onChangeWriter} defaultValue={props.data?.fetchBoard?.writer} /><br/>
            Title: <input type="text"  onChange={props.onChangeTitle} defaultValue={props.data?.fetchBoard?.title} /><br/>
            Contents: <input type="text"  onChange={props.onChangeContents} defaultValue={props.data?.fetchBoard?.contents} /><br/>
            <QQQ.BlueButton 
                rrr="20px"
                qqq="blue"
                zzz={props.mycolor}
                onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
            >
                {props.isEdit ? "Edit" : "Create"}
            </QQQ.BlueButton>
        </>
    )
}