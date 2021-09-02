import React, {useEffect, useState} from 'react'; 
import { useLocation } from "react-router-dom";

import Article from "./Article";

function ArticlePage(){
    const [currArticle , setCurrArticle] = useState();
    const [comments , setComments] = useState();
    const [author , setAuthor] = useState();

    let location = useLocation();
    const { articleId } = location.state

    //fetching authort only after we have fetvched the posts
    const getAuthor =(authorId, requestOptions)=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${authorId}`, requestOptions)
            .then(response => response.json())
            .then(data => setAuthor(data));
    }

    //using use effect so that it is loaded only once
    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        //fetching post
        fetch(`https://jsonplaceholder.typicode.com/posts/${articleId}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                setCurrArticle(data);
                getAuthor(data.userId, requestOptions);
            });
        //fetching comments
        fetch(`https://jsonplaceholder.typicode.com/posts/${articleId}/comments`, requestOptions)
            .then(response => response.json())
            .then(data => setComments(data));
    }, []);
    
    //rendering anothert compponent for the same
    return (
        <Article 
            data={currArticle}
            comments={comments}
            author={author}
        />
    )
}

export default ArticlePage; 