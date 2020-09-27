import React, { useEffect, useState } from 'react';
import {Carousel} from 'react-bootstrap'

function JokeFooter() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [jokes, setJokes] = useState([]);
  
    useEffect(() => {
      fetch("https://official-joke-api.appspot.com/jokes/programming/ten")
        .then(res => res.json())
        .then((result) => {
            setIsLoaded(true);
            setJokes(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [setJokes, setIsLoaded])
  

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className = "jokes">
            <Carousel>
                {jokes.map(joke => (
                    <Carousel.Item key={joke.id}>
                        <div className = "jokesText">
                          <p className = "vraag">{joke.setup}</p>
                          <p>{joke.punchline}</p>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
            
         </div>      
          
      );
    }
}
export default JokeFooter;