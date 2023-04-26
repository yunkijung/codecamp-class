import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import { MouseEvent, useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 25%;
`;

export default function staticRoutedPage() {
  const [myIndex, setMyIndex] = useState([
    false, // index 0
    false, // index 1
    false, // index 2
    false, // index 3
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickEdit = (event: MouseEvent<HTMLButtonElement>) => {
    const qqq = [...myIndex];
    qqq[Number(event.currentTarget.id)] = true;
    setMyIndex(qqq);
  };

  return (
    <>
      {data?.fetchBoards.map((el, index) => (
        <div key={el._id}>
          {!myIndex[index] && (
            <Row key={el._id}>
              <Column>{el.writer}</Column>
              <Column>{el.title}</Column>
              <Column>
                <button id={String(index)} onClick={onClickEdit}>
                  Edit
                </button>
              </Column>
            </Row>
          )}
          {myIndex[index] && (
            <div>
              Edit: <input type="text" />
            </div>
          )}
        </div>
      ))}
    </>
  );
}
