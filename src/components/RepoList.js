import React from 'react';
import {Card, Button, CardDeck} from 'react-bootstrap'
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 50, (x - window.innerWidth / 2) / 50, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const RepoList = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <div>
        <CardDeck>
            {repos.map((repo) => {
              // console.log({repos})
              return (
                  Carddd(repo)
              );
            })}
        </CardDeck>
    </div>
  );
};

function Carddd(repo) {
    const [propss, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    return (
     <animated.div className="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: propss.xys.interpolate(trans) }}
    >
        <Card>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
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