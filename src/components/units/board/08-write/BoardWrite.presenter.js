//import { BlueButton, RedInput } from "./BoardWrite.styles";
import * as QQQ from './BoardWrite.styles';

export default function BoardWriteUI(props){
    return (
        <>
            <div>{props.isEdit ? "Edit" : "Create"}</div>
            Writer: <QQQ.RedInput type="text"  onChange={props.onChangeWriter} /><br/>
            Title: <input type="text"  onChange={props.onChangeTitle} /><br/>
            Contents: <input type="text"  onChange={props.onChangeContents} /><br/>
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