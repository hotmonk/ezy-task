import React, {useEffect, useState} from 'react'; 
import { useLocation } from "react-router-dom";

import Article from "./Article";

function ArticlePage(){
    const [currArticle , setCurrArticle] = useState();
    const [comments , setComments] = useState();
    const [author , setAuthor] = useState();

    let location = useLocation();
    const { articleId } = location.state

    const getAuthor =(authorId, requestOptions)=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${authorId}`, requestOptions)
            .then(response => response.json())
            .then(data => setAuthor(data));
    }

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };

        fetch(`https://jsonplaceholder.typicode.com/posts/${articleId}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                setCurrArticle(data);
                getAuthor(data.userId, requestOptions);
            });

        fetch(`https://jsonplaceholder.typicode.com/posts/${articleId}/comments`, requestOptions)
            .then(response => response.json())
            .then(data => setComments(data));
    }, []);
    
    return (
        <Article 
            data={currArticle}
            comments={comments}
            author={author}
        />
    )
}

export default ArticlePage; 