import { gql, useMutation } from '@apollo/client';

const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String){ #Data type
        createBoard(writer: $writer, title: $title, contents: $contents){ #Variables
            _id
            number
            message  
        }
    }

`

export default function GraphqlMutationPage(){
    const [myFunction] = useMutation(CREATE_BOARD);

    const onClickSubmit = async () => {
        const result = await myFunction({
            variables: {
                writer: "John",
                title: "Hello",
                contents: "This is contents..."
            }
        });
        console.log(result);
        alert(result.data.createBoard.message);
    }

    return(
        <>
            <button onClick={onClickSubmit}>GRAPHQL-API(sync) REQUEST</button>
        </>
    )
}