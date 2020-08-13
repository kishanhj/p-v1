import React from "react";
import { FaExternalLinkAlt,FaGithub } from 'react-icons/fa';
import styled from "styled-components";

const StyledContainer = styled.div`
    display : flex;
    flex-direction : row;
    margin-top : 26px;
    flex : 0 0 100px;
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
    margin : 5px;
    text-decoration : none;
    font-size : 1.8em;
`;



const ProjectLinks = ({data}) => {

    const {github_url,hosting_url} = data;

    return (
        <StyledContainer>
            {github_url && <Link href={github_url} title='GitHub' target="__blank"> <FaGithub /> </Link>}
            {hosting_url && <Link href={hosting_url} title='Live site' target="__blank"><FaExternalLinkAlt /> </Link>}
        </StyledContainer>
    );
}

export default ProjectLinks;