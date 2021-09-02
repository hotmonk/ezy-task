import React, {useEffect, useState} from 'react'; 
import styled from 'styled-components';


const Wrapper = styled.div`
    padding: 2rem;
    text-align: -webkit-center;

`;

const ContentWrapper = styled.div`
    max-width: 1000px;
    text-align: -webkit-center;
`;

const Title = styled.h2`
    font-weight: 400;
`;

const Body = styled.div`
    margin: 50px;
`;

const Author = styled.section`
    font-size: 20px;
    font-style: italic;
`;

const CommentsContainer= styled.div`

`;

const CommentsBody= styled.div`
    text-align:left;
`;

function Article({data, comments, author}){
    let commentsbody=null;

    let content=null;
    if(data&&comments&&author)
    {
        commentsbody=<CommentsContainer>
            <b>Comments</b>
            <CommentsBody>
            {comments.map((curr)=>
                <div key={curr.id}>
                    "{curr.body}"
                </div>
            )}
            </CommentsBody>
        </CommentsContainer>;

        content=<ContentWrapper>
            <Title>
                {data.title}
                <Author> by {author.name}</Author>
            </Title>
            <Body>
                {data.body}
            </Body>
            {commentsbody}
        </ContentWrapper>
    }

    return (
        <Wrapper>
            {content}
            
        </Wrapper>
    )
}

export default Article;