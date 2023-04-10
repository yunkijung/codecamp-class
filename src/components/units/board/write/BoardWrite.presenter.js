//import { BlueButton, RedInput } from "./BoardWrite.styles";
import * as QQQ from './BoardWrite.styles';

export default function BoardWriteUI(props){
    return (
        <>
            <div>{props.aaa}</div>
            Writer: <QQQ.RedInput type="text"  onChange={props.onChangeWriter} /><br/>
            Title: <input type="text"  onChange={props.onChangeTitle} /><br/>
            Contents: <input type="text"  onChange={props.onChangeContents} /><br/>
            <QQQ.BlueButton onClick={props.onClickSubmit}>GRAPHQL-API(sync) REQUEST</QQQ.BlueButton>
        </>
    )
}