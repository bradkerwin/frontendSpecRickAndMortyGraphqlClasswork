import { gql } from "urql";

// gql is REQUIRED in order for react to interpret our queries.
export const GET_CHARACTERS = gql`
    query {
        characters {
            results {
                id
                name
                image
            }
        }
    }
`

export const GET_CHARACTER = gql`
    query GetCharacter($id: ID!) {
  character(id: $id) {
    id
    name
    image
    episode {
      name
      episode
      id
    }
  }
}
`