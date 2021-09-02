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


function Home(){
    const [articles , setArticles] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
            .then(response => response.json())
            .then(data => setArticles(data));
    }, []);

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