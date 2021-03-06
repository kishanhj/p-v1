import React from "react";
import styled from "styled-components";
import ExperienceCard from "./ExperienceCard";

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

const Experience = ({experience,MountData}) => {

    if(!MountData)
        return (<StyledContainer id="experience"></StyledContainer>)

    return (
        <StyledContainer id="experience">
            <SectionTitle>2. Industry Experience</SectionTitle>
            {experience && experience.map((exp) => 
                <ExperienceCard key={exp.key} data={exp} />
            )}
        </StyledContainer>
    )
}

export default Experience;