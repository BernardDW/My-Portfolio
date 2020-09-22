import React, { useEffect, useState } from 'react';
import {Card, Button, CardDeck} from 'react-bootstrap'
  
function News() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [articlesList, setArticlesList] = useState([]);
    const baseUrl ="https://newsapi.org/v2/top-headlines?sources=recode&apiKey=";
    const fullURL = `${baseUrl}${process.env.REACT_APP_NEWS_API_KEY}`

    useEffect(() => {
    fetch(fullURL)
        .then(res => res.json())
        .then((result) => {
            setIsLoaded(true);
            setArticlesList(result.articles);
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
        }
        )
    }, [fullURL,setIsLoaded,setArticlesList])


    if (error) {
    return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
    return <div>Loading...</div>;
    } else {
        return (
            <div className = "news">
                <div className=" titles newsh1">
                    <h1>Latest tech news</h1>
                </div>
                <div className="newsContainer">
                    <CardDeck>
                        {articlesList.slice(0,6).map((article,i) => (
                            <Card key={i}>
                                <Card.Img variant="top" src={article.urlToImage} />
                                <Card.Body>
                                    <Card.Title>{article.title}</Card.Title>
                                    <Button href={article.url} className = "btn-ekstra" variant="outline-dark" target="_blank">Read</Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </CardDeck>
                </div>      
            </div>
            
        );
    }
}
export default News;