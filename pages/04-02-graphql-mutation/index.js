import { gql, useMutation } from '@apollo/client';

const CREATE_BOARD = gql`
    mutation{
        createBoard(writer: "John", title: "This is title...", contents: "This is content......"){
            _id
            number
            message  
        }
    }

`

export default function GraphqlMutationPage(){
    const [myFunction] = useMutation(CREATE_BOARD);

    const onClickSubmit = async () => {
        const result = await myFunction();
        console.log(result);
        alert(result.data.createBoard.message);
    }

    return(
        <>
            <button onClick={onClickSubmit}>GRAPHQL-API(sync) REQUEST</button>
        </>
    )
}