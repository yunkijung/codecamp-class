import { gql } from '@apollo/client'

export const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String){ #Data type
        createBoard(writer: $writer, title: $title, contents: $contents){ #Variables
            _id
            number
            message  
        }
    }

`