import React from "react";
import styled from "styled-components";

const StyledContainer = styled.section`
    max-width: 850px;
    width: 90%;
    margin: 0 auto;
    padding: 120px 0 60px 0;
    opacity : 1;
`;

const SectionTitle = styled.h2`
    color: ${props => props.theme.link};
    text-align : center;
`;

const Description = styled.div`
    text-align : center;
    display : flex;
    flex-direction : column;
    line-height : 1.5;
    font-size : 1.2em;
`;

const SayHiLink = styled.a`
    border : 2px solid ${props => props.theme.border};
    border-radius : 5px;
    padding : 10px;
    color : ${props => props.theme.link};
    font-size : 20px;
    font-weight : 500;
    background-color : transparent;
    margin-top : 20px;
    cursor : pointer;
    transition : all 0s ease-in-out;
    text-decoration : none;
    flex : 0 0;
    width : 100px;
    align-self : center;

    :hover {
        transform : scale(1.1);
    }
`;


const Contact = ({contact,MountData}) => {

    if(!MountData)
        return (<StyledContainer></StyledContainer>)

    return (
        <StyledContainer id="contact">
            <SectionTitle>{contact.title}</SectionTitle>
            <Description>
                {contact.description}
                <SayHiLink href="mailto:khuliyar@stevens.edu" target="__blank"> Say Hi </SayHiLink>
            </Description>
        </StyledContainer>
    )
}

export default Contact;