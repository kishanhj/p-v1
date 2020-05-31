import React from "react";
import styled from "styled-components";


const StyledContainer = styled.section`
    max-width: 850px;
    width: 90%;
    margin: 0 auto;
    padding: 60px 0;
`;

const Title = styled.h1`
    font-size : 80px;
    margin : 0;
    margin-top : 10px;
    font-family: 'Caveat', cursive;
`;

const Prefix = styled.div`
    color : gold;
    font-family: 'Montserrat', sans-serif;
`;

const Postfix = styled.p`
    margin : 0;
    font-size : 30px;
    font-family: 'Montserrat', sans-serif;
`;

const About = () => {

    return (
        <StyledContainer id="about">
            <Prefix>Hi, my name is </Prefix>
            <Title>Kishan Huliyar Jagadeesh</Title>
            <Postfix>I build websites and Mobile Apps.</Postfix>

        </StyledContainer>
    );
}

export default About;