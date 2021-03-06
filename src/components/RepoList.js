import React from 'react';
import {Card, Button, CardDeck} from 'react-bootstrap'
import { useSpring, animated } from 'react-spring'

//Constants used for card animation
const calc = (x, y) => [-(y - window.innerHeight / 2) / 50, (x - window.innerWidth / 2) / 50, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const RepoList = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <div>
        <CardDeck>
            {repos.map((repo) => {
              return (
                  Carddd(repo)
              );
            })}
        </CardDeck>
    </div>
  );
};


// Card function used to display repositories
function Carddd(repo) {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));


    return (
     <animated.div className="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
      key={repo.id}
    >
      <Card>
          <Card.Body>
              <Card.Title>{repo.name}</Card.Title>
              <Card.Text>
              {repo.description}
              </Card.Text>
              <Button href={repo.html_url} className = "btn-ekstra" variant="outline-dark" target="_blank">View</Button>
          </Card.Body>
      </Card>

    </animated.div>
    )
  }

export default RepoList;