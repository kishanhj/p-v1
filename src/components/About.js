import React from "react";
import styled from "styled-components";


const StyledContainer = styled.section`
    max-width: 850px;
    width: 90%;
    margin: 0 auto;
    padding: 60px 0;
    opacity : 1;
`;

const Title = styled.h1`
    font-size : 80px;
    margin : 0;
    margin-top : 10px;
    font-family: 'Caveat', cursive;
`;

const Prefix = styled.div`
    color : gold;
`;

const Postfix = styled.h2`
    margin : 0;
    font-size : 35px;
`;

const Desc = styled.p`
    max-width : 500px;
    margin-top : 50px;
    line-height : 1.35;
    font-size : 20px;
`;

const Button = styled.button`
    border : 2px solid gold;
    border-radius : 5px;
    padding : 15px;
    color : gold;
    font-size : 20px;
    font-weight : 500;
    background-color : transparent;
    margin-top : 20px;
    cursor : pointer;
    transition : scale 0s ease-in-out;
    text-decoration : none;

    :hover  {
        transform : scale(1.1)
    }
`;

const About = () => {

    return (
        <StyledContainer id="about">
            <Prefix>Hi, my name is </Prefix>
            <Title>Kishan Huliyar Jagadeesh</Title>
            <Postfix>I build websites and Mobile Apps.</Postfix>
            <Desc> 
                I am a Full-stack developer based in New York City, NY. 
                I can build modern full-fledged, responsive websites, 
                and cross-platform mobile apps ( IOS and Android ).
            </Desc>

            <form action="mailto:khuliyar@stevens.edu" target="__blank">
                <Button  type="submit" > Say Hi </Button>
            </form>

        </StyledContainer>
    );
}

export default About;