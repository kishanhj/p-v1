import React, { useState } from "react";
import styled  from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";


const StyledContainer = styled.section`
    max-width: 850px;
    width: 90%;
    margin: 0 auto;
    padding: 60px 0;
    opacity : 1;
    transform: scale(1);
    transition: transform 1.5s ease, opacity 2s ease;

    .fade-enter {
        opacity : 0;
        transform : translateY(30px);
    }
    
    .fade-enter-active {
        opacity : 1;
        transform : translateY(0px);
        transition : transform 500ms ease-in,opacity 500ms ease-in;
    }

`;

const Title = styled.h1`
    font-size : 80px;
    margin : 0;
    margin-top : 10px;
    font-family: 'Caveat', cursive;
`;

const Prefix = styled.div`
    color : gold;
    font-size : 1.3em;
`;

const Tagline = styled.h2`
    margin : 0;
    font-size : 35px;
`;

const Desc = styled.p`
    max-width : 500px;
    margin-top : 50px;
    line-height : 1.35;
    font-size : 20px;
`;

const SayHiLink = styled.a`
    border : 2px solid gold;
    border-radius : 5px;
    padding : 10px;
    color : gold;
    font-size : 20px;
    font-weight : 500;
    background-color : transparent;
    margin-top : 20px;
    cursor : pointer;
    transition : all 0s ease-in-out;
    text-decoration : none;

    :hover {
        font-size : 1.5em;
    }
`;

const LinkWarp = styled.div`
    margin-top : 30px;
`;

const About = ({data,setMountData}) => {
    const {name , tagline , intro} = data;
    const [isMounted,setMounted] = useState(false);
    setInterval(
        () => {setMounted(true);setMountData(true)},1000
    )

    const prefixC = () => (<Prefix style={{ transitionDelay: `400ms` }}>Hi, my name is </Prefix>);
    const titleC = () => (<Title style={{ transitionDelay: `500ms` }}>{name}</Title>);
    const taglineC = () => (<Tagline style={{ transitionDelay: `600ms` }}>{tagline}</Tagline>);
    const descC = () => (<Desc style={{ transitionDelay: `700ms` }}> {intro} </Desc>)
    const hiLinkC = () => (<LinkWarp style={{ transitionDelay: `800ms` }} ><SayHiLink  href="mailto:khuliyar@stevens.edu" target="__blank"> Say Hi </SayHiLink></LinkWarp>)

    const comps = [prefixC,titleC,taglineC,descC,hiLinkC];

    return (
        <StyledContainer id="about">
            <TransitionGroup  component={null}>                       
                {isMounted  && comps.map((item) => 
                    <CSSTransition in={isMounted} timeout={1200} 
                    classNames={{
                                enter: 'fade-enter',
                                enterActive: 'fade-enter-active'}}>
                        {item}   
                    </CSSTransition>) }
            </TransitionGroup>
        </StyledContainer>
    );
}

export default About;