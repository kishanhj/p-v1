import React from "react";
import { FaExternalLinkAlt,FaGithub } from 'react-icons/fa';
import styled from "styled-components";

const StyledContainer = styled.div`
    margin-top : 26px;
    flex : 0 0 100px;
`;

const Link = styled.a`
    :visited {
        color : white;
    }

    :hover {
        font-size : 1.8em;
        color : gold;
    }
    margin : 5px;
    text-decoration : none;
    font-size : 1.5em;
`;



const ProjectLinks = ({data}) => {

    const {github_url,hosting_url} = data;

    return (
        <StyledContainer>
            {github_url && <Link href={github_url} target="__blank"> <FaGithub /> </Link>}
            {hosting_url && <Link href={hosting_url} target="__blank"><FaExternalLinkAlt /> </Link>}
        </StyledContainer>
    );
}

export default ProjectLinks;