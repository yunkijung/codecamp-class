import styled from "@emotion/styled";
import { useState } from "react";
import { IBoard } from "../../../commons/types/generated/types";

interface IProps {
  el: IBoard;
}

export default function BoardCommentItem(props: IProps) {
  const [isEdit, setIsEdit] = useState(false);

  const Row = styled.div`
    display: flex;
  `;

  const Column = styled.div`
    width: 25%;
  `;

  const onClickEdit = () => {
    setIsEdit(true);
  };

  return (
    <div key={props.el._id}>
      {!isEdit && (
        <Row key={props.el._id}>
          <Column>{props.el.writer}</Column>
          <Column>{props.el.title}</Column>
          <Column>
            <button onClick={onClickEdit}>Edit</button>
          </Column>
        </Row>
      )}
      {isEdit && (
        <div>
          Edit: <input type="text" />
        </div>
      )}
    </div>
  );
}
