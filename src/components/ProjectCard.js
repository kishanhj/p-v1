import React from "react";
import styled from "styled-components";
import ProjectLinks from "./ProjectLinks";

const StyledContainer = styled.div`
    display : block;
    margin : 25px;
`;

const TitleWrap = styled.div`
    display : flex;
`;

const Title = styled.h3`
    font-size : 1.5em;
    margin-bottom : 3px;
    flex : 1 0 200px;
`;

const Desc = styled.div`
    line-height : 1.5;
    font-size : 1.2em;
`;

const TechList = styled.div`
    display : flex;
    flex-wrap : wrap;
    margin-top : 5px;
`;

const Tech = styled.span`
    border : 2px solid gold;
    margin : 5px;
    padding : 5px;
    border-radius : 5px;
`;

var count = 1;

const ProjectCard = ({data}) => {
    console.log(data);
    return (
        <StyledContainer>
            <TitleWrap>
                <Title>{data.title} </Title>
                <ProjectLinks data={data} />
            </TitleWrap>
            
            <Desc>{data.description}</Desc>
            <TechList>
                {data.technology.map( 
                    (tech) => <Tech key={count++}> {tech} </Tech>
                )}
            </TechList>
        </StyledContainer>
    );
}

export default ProjectCard;