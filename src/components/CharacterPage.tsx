import { useQuery } from "@apollo/client";
import { GET_CHARACTER } from "../queries/queries";
import { Container, Card, Col, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const CharacterPage = () => {
    const { id } = useParams(); // useParams is going to look for a parameter in our url called "id" and grab that value for us.
  const { data, loading } = useQuery(GET_CHARACTER, {
    variables: {
        id // works the same as id: id,
    },
  });

  if(loading) {
    return <Spinner />
}

  return (
    <Container>
      <Col key={data.character.id}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={data.character.image} />
          <Card.Body>
            <Card.Title>{data.character.name}</Card.Title>
            <ul>
              {data.character.episode.map((ep: any) => (
                <li key={ep.id}>
                  {ep.episode} - {ep.name}
                </li>
              ))}
            </ul>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
};

export default CharacterPage;
