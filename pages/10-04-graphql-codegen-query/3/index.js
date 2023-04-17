import { gql, useQuery } from "@apollo/client";

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

    const {data} = useQuery(FETCH_BOARD, {
        variables: {
            number: 20003
        }
    });

    console.log("---------");
    console.log(data);
    console.log("---------");

    return (
        <>
            <div>Moved to 3</div>
            <div>Writer: {data ? data.fetchBoard.writer : "Loading..."}</div>
            <div>Title: {data && data.fetchBoard.title}</div>
            <div>Contents: {data?.fetchBoard.contents}</div> 
        </>
    )
}