import React from "react";
import styled from "styled-components";
import { FaGithub,FaLinkedin,FaFacebook,FaInstagram, FaMailBulk, FaCode } from 'react-icons/fa';

const StyledContainer = styled.footer`
    max-width: 850px;
    width: 80%;
    margin: 0 auto;
    padding: 60px 0;
    opacity : 1;
    diplay : flex;
    flex-direction : colunm;
`;

const Title = styled.h2`
    text-align : center;
    color : gold;

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
        color : white;
    }

    :hover {
        font-size : 3em;
        color : gold;
    }

    color : white;
    margin-left : 15px;
    margin-right : 15px;
    text-decoration : none;
    font-size : 2.5em;  
    flex : 1 1 50px;  
    align-self : center;
`;

const Footer = ({social}) => {
    return (
        <StyledContainer>
            <Title>Keep in touch!!</Title>
            <Social>
                <Link href={social.linkedIn} target="__blank"> <FaLinkedin /> </Link>
                <Link href={social.gitHub} target="__blank"> <FaGithub /> </Link>
                {/* <Link href={social.facebook} target="__blank"> <FaFacebook /> </Link> */}
                <Link href={social.leetcode} target="__blank"> <FaCode /> </Link>
                <Link href={social.instagram} target="__blank"> <FaInstagram /> </Link>
                <Link href="mailto:khuliyar@stevens.edu" target="__blank"> <FaMailBulk /> </Link>
            </Social>
        </StyledContainer>
    )
}

export default Footer;