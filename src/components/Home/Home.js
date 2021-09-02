import React, {useEffect, useState} from 'react'; 
import styled from 'styled-components'

import Homecard from "./Homecard";

const ArticleWrapper = styled.div`
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const Heading = styled.h1`
    text-align:center;
`;

//component which will render all the cards which only contain the titles
function Home(){
    // to store the articles
    const [articles , setArticles] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        //get request to fetch all the posts and store it
        fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
            .then(response => response.json())
            .then(data => setArticles(data));
    }, []);

    //mapping through the entire lists and renderering a card fo revery post
    const posts=articles.map((currPost)=>
    <div key={currPost.id}>
        <Homecard article={currPost}/>
    </div>
    )
    return (
        <div>
            <Heading>
                Articles
            </Heading>
            <ArticleWrapper>
            {posts}
            </ArticleWrapper>
        </div>
        
    )
}

export default Home;