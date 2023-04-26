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
  const [myIndex, setMyIndex] = useState(5);

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickEdit = (event: MouseEvent<HTMLButtonElement>) => {
    setMyIndex(Number(event.currentTarget.id));
  };

  return (
    <>
      {data?.fetchBoards.map((el, index) => (
        <div key={el._id}>
          {index !== myIndex && (
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
          {index === myIndex && (
            <div>
              Edit: <input type="text" />
            </div>
          )}
        </div>
      ))}
    </>
  );
}
