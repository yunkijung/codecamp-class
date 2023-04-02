import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!){ #Data type
        createProduct(seller: $seller, createProductInput: $createProductInput){ #Variables
            _id
            number
            message  
        }
    }

`

export default function GraphqlMutationPage(){
    const [myFunction] = useMutation(CREATE_PRODUCT);
    

    const onClickSubmit = async () => {
        const result = await myFunction({
            variables: {
                seller: "John",
                createProductInput: {
                    name: "Mouse",
                    detail: "Good Mouse",
                    price: 3000
                }
            }
        });
        console.log(result);
        alert(result.data.createProduct.message);
    }

    

    return(
        <>
            <button onClick={onClickSubmit}>GRAPHQL-API(sync) REQUEST</button>
        </>
    )
}