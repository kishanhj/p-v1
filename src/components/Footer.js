import React from "react";
import styled from "styled-components";
import { FaGithub,FaLinkedin,FaFacebook,FaInstagram, FaMailBulk, FaCode } from 'react-icons/fa';

const StyledContainer = styled.footer`
    max-width: 850px;
    width: 80%;
    margin: 0 auto;
    padding: 20px 0;
    opacity : 1;
    diplay : flex;
    flex-direction : colunm;
`;

const Title = styled.h2`
    text-align : center;
    color : ${props => props.theme.link};
    font-family: 'Caveat', cursive;
    font-size : 50px;
`;

const Social = styled.div`
    display : flex;
    margin-bottom : 10px;
    margin-top : 30px;
    width : 60%;
    margin-left : 20%;
    flex-wrap : wrap;
`;


const Link = styled.a`
    :visited {
        color : ${props => props.theme.color};
    }

    :hover {
        transform : translateY(-10px);
        color : ${props => props.theme.link};
    }

    color : ${props => props.theme.color};
    margin-left : 15px;
    margin-right : 15px;
    text-decoration : none;
    font-size : 2.5em;  
    flex : 0 0 50px;  
    align-self : center;
`;

const Footer = ({social,MountData}) => {

    if(!MountData)
        return (<StyledContainer></StyledContainer>)

    return (
        <StyledContainer>
            <Title>Keep in touch!!</Title>
            <Social>
                <Link href={social.linkedIn} title='LinkedIn' target="__blank"> <FaLinkedin /> </Link>
                <Link href={social.gitHub} title='GitHub' target="__blank"> <FaGithub /> </Link>
                <Link href={social.facebook} title='Facebook' target="__blank"> <FaFacebook /> </Link>
                <Link href={social.leetcode} title='LeetCode' target="__blank"> <FaCode /> </Link>
                <Link href={social.instagram} title='Instagram' target="__blank"> <FaInstagram /> </Link>
                <Link href="mailto:khuliyar@stevens.edu" title='Mail' target="__blank"> <FaMailBulk /> </Link>
            </Social>
        </StyledContainer>
    )
}

export default Footer;