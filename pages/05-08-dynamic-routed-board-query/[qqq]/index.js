import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

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
    const router = useRouter();
    console.log(router);
    console.log(router.query.qqq);

    const {data} = useQuery(FETCH_BOARD, {
        variables: {
            number: Number(router.query.qqq)
        }
    });

    console.log("---------");
    console.log(data);
    console.log("---------");

    return (
        <>
            <div>Moved to {router.query.qqq}</div>
            <div>Writer: {data ? data.fetchBoard.writer : "Loading..."}</div>
            <div>Title: {data && data.fetchBoard.title}</div>
            <div>Contents: {data?.fetchBoard.contents}</div> 
        </>
    )
}