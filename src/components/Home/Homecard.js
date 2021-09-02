import React from 'react'; 
import {Link} from "react-router-dom";
import styled from 'styled-components'

const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    font-size: 20px;
    height: 200px;
    width: 250px;
    margin 2rem;
    border-radius: 10%;
    &: hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`;

const Container = styled.div`
    padding: 20px;
`;


function HomeCard({article}){
    return (
        <Card>
        <Link style={{textDecoration: "none"}} to={{
            pathname: "/article",
            state: {
              articleId: article.id,
            },
          }}>
            <Container>
                {article.title}
            </Container>
        </Link>
        </Card>
    )
}

export default HomeCard; 
