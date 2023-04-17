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
    console.log(router.query.number);

    const {data} = useQuery(FETCH_BOARD, {
        variables: {
            number: Number(router.query.number)
        }
    });

    console.log("---------");
    console.log(data);
    console.log("---------");

    const onClickMoveToEdit = () => {
        router.push(`/09-01-boards/${router.query.number}/edit`)
    }

    return (
        <>
            <div>Moved to {router.query.number}</div>
            <div>Writer: {data ? data.fetchBoard.writer : "Loading..."}</div>
            <div>Title: {data && data.fetchBoard.title}</div>
            <div>Contents: {data?.fetchBoard.contents}</div>
            <button onClick={onClickMoveToEdit}>Go to Edit</button> 
        </>
    )
}