import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_CHARACTERS } from '../queries/queries';
import { Container, Row, Col, Card, Button, Spinner }from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface CharacterData {
    id: string
    name: string
    image: string
}

const CharactersPage = () => {
    const { data, loading } = useQuery(GET_CHARACTERS);

    if(loading) {
        return <Spinner />
    }

  return (
    <>
        <Container>
            <Row>
            {
                data.characters.results.map(({id, name, image}: CharacterData) => (
                    <Col key={id}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Link to={`/${id}`}>
                                <Button variant="primary">Go somewhere</Button>
                            </Link>
                        </Card.Body>
                        </Card>
                    </Col>
                ))
            }
            </Row>
        </Container>
    </>
  )
}

export default CharactersPage;