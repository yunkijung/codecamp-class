import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

// prettier-ignore
const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) { #Data type
    createBoard(writer: $writer, title: $title, contents: $contents) { #Variables
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });
  const [myFunction] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await myFunction({
      variables: { ...inputs },
    });
    console.log(result);
    alert(result.data.createBoard.message);
  };

  const onChangeInputs = (event) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <>
      Writer: <input id="writer" type="text" onChange={onChangeInputs} />
      <br />
      Title: <input id="title" type="text" onChange={onChangeInputs} />
      <br />
      Contents: <input id="contents" type="text" onChange={onChangeInputs} />
      <br />
      <button onClick={onClickSubmit}>GRAPHQL-API(sync) REQUEST</button>
    </>
  );
}
