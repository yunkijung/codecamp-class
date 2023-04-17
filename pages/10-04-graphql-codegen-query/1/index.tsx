import { gql, useQuery } from "@apollo/client";
import { IQuery, IQueryFetchBoardArgs } from "../../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number: $number){
            writer
            title
            contents
        }
    }
`

export default function staticRoutedPage(){

    const {data} = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
        variables: {
            number: 20001
        }
    });

    console.log("---------");
    console.log(data);
    console.log("---------");

    return (
        <>
            <div>Moved to 1</div>
            <div>Writer: {data ? data.fetchBoard?.writer : "Loading..."}</div>
            <div>Title: {data && data.fetchBoard?.title}</div>
            <div>Contents: {data?.fetchBoard?.contents}</div> 
        </>
    )
}