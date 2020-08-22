import React, { useState } from "react";
import styled from "styled-components"
import media from "../data/media"
import "../index.css"
import { CSSTransition, TransitionGroup } from "react-transition-group";

const StyledHeader = styled.header`
    display : flex;
    min-height : 80px;
    margin-left : 20px;
    margin-right : 20px;

    position: sticky;
    top: 0;
    z-index: 1200;
    background-color : ${props => props.theme.bg};
    color : ${props => props.theme.color};

    .fade-enter {
        opacity : 0;
        transform : translateY(-30px);
    }
    
    .fade-enter-active {
        opacity : 1;
        transform : translateY(0px);
        transition : transform 300ms ease-in,opacity 300ms ease-in;
    }

`;

const Nav = styled.nav`
    display : flex;
    align-items : center;
    width : 100%;

    ${
        media.tablet `
            flex-direction : column;
            
        `
    }
`;



const StyledListItem = styled.li`
    margin : 0.5em;
    counter-increment : item 1;
    font-size : 1.3em;
    &:before {
        content: '0' counter(item) '. ';
        text-align: right;
        color: ${props => props.theme.link};
        font-family: 'Caveat', cursive;
        font-size : 1.4em
    }
    
`;

const Link = styled.a`
    text-decoration : none;
    color : ${props => props.theme.color};

    :visited {
        color : ${props => props.theme.color};
    }

    :hover {
        color : ${props => props.theme.link};
    }
`;

const Image = styled.img`
    width : 100px;
    height : 100px;
    margin : 5px;
    flex : 0 0 60px;
    border-radius : 50px;
    cursor : pointer;

    ${
        media.tablet `
            width : 100px;
            height : 120px;
        `
    }
`;

const LinkContainer = styled.div`
    flex : 1 0 100px;
    
`;

const OL = styled.ol`
    display : flex;
    justify-content: flex-end;
    list-style : none;
    
`;

const ResumeButton = styled.a`
    border : 2px solid ${props => props.theme.border};
    border-radius : 5px;
    padding : 10px;
    color : ${props => props.theme.link};
    font-size : 15px;
    font-weight : 500;
    background-color : transparent;
    flex : 0 0 60px;
    margin : 20px;
    cursor : pointer;
    transition : all 0s ease-in-out;
    text-decoration : none;

    :hover  {
        transform : scale(1.1)
    }

    ${
        media.tablet `
            flex : 0 0 20px;
            margin-top : 0;
        `
    }
`;



const Header = ({themeToggle}) => {

    const [isMounted,setMounted] = useState(false);
    const [isDarktheme,setIsDarkTheme] = useState(true);

    const links = [
        {url : "#aboutMe" , title : "About"},
        {url : "#experience" , title : "Experience"},
        {url : "#projects" , title : "Projects"},
        {url : "#contact" , title : "Contact"},
    ]

    setInterval(
        () => setMounted(true),1000
    )

    const imageToggle = () => {
        setIsDarkTheme(!isDarktheme);
        themeToggle();
    }
    
    return (
        <StyledHeader>
                <Nav>
                    <TransitionGroup  component={null}>                       
                        {isMounted  && 
                            <CSSTransition in={isMounted} timeout={1200} 
                            classNames={{
                                        enter: 'fade-enter',
                                        enterActive: 'fade-enter-active'}}>
                                <Image id='img' src={isDarktheme ? "./K-logo-dark.png" : "./K-logo-light.png"} onClick={imageToggle}
                                style={{ transitionDelay: `100ms` }} /> 
                        </CSSTransition> }
                    </TransitionGroup>

                    <LinkContainer>
                        <OL>
                        <TransitionGroup  component={null}>
                            {isMounted  && links.map(({url,title},i) => 
                                <CSSTransition key={i} in={isMounted} timeout={1200} 
                                    classNames={{
                                                enter: 'fade-enter',
                                                enterActive: 'fade-enter-active'}}>
                                    <StyledListItem key={i}
                                    style={{ transitionDelay: `${i * 100}ms` }}>
                                        <Link className="test" href={url}> {title} </Link>
                                    </StyledListItem>
                                </CSSTransition>
                            )}
                         </TransitionGroup>
                        </OL>
                    </LinkContainer>

                    <TransitionGroup  component={null}>                       
                        {isMounted  && 
                            <CSSTransition in={isMounted} timeout={1200} 
                            classNames={{
                                        enter: 'fade-enter',
                                        enterActive: 'fade-enter-active'}}>
                                <ResumeButton target='__blank' href="./Resume.pdf" className="resumeButton"
                                style={{ transitionDelay: `${links.length * 100}ms` }}> Resume </ResumeButton>
                        </CSSTransition> }
                    </TransitionGroup>
                </Nav>
        </StyledHeader>
    );
}

export default Header;