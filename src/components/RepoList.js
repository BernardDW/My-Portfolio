import React from 'react';
import {Card, Button, CardDeck} from 'react-bootstrap'

const RepoList = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <div>
        <CardDeck>
            {repos.map((repo) => {
            return (
                <Card>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>{repo.name}</Card.Title>
                        <Card.Text>
                        {repo.description}
                        </Card.Text>
                        <Button variant="outline-dark">View</Button>
                    </Card.Body>
                </Card>
            );
            })}
        </CardDeck>
    </div>
  );
};

export default RepoList;