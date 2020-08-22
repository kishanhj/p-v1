import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const StyledContainer = styled.section`
    max-width: 850px;
    width: 90%;
    margin: 0 auto;
    padding: 120px 0 60px 0;
    opacity : 1;
`;

const SectionTitle = styled.h2`
    color : ${props => props.theme.link};
`;

var count = 1;

const Project = ({projects,MountData}) => {

    if(!MountData)
        return (<StyledContainer id="projects"></StyledContainer>)

    return (
        <StyledContainer id="projects">
            <SectionTitle>3. Projects</SectionTitle>
            {projects && projects.map((project) => 
                <ProjectCard key={count++} data={project} />
            )}
        </StyledContainer>
    )
}

export default Project;