import React, { useState } from "react";
import styled from "styled-components";

const StyledContainer = styled.section`
    max-width: 850px;
    width: 90%;
    margin: 0 auto;
    padding: 60px 0;
    opacity : 1;
`;

const SectionTitle = styled.h2`
    color : gold;
`;

const SummaryContainer = styled.div`
    display : flex;
`;


const SummaryText = styled.div`
    font-size : 1.3em;
    align-self : center;
`;

const Image = styled.img`
    width : 350px;
    border-radius : 5px;
    margin-left : 15px;
    opacity : 0.75;
    transition : all 0.5s ease-in;
    
    :hover{
        opacity : 1;
        transform : scale(1.1);
    }
`;

const Link = styled.a`
    text-decoration : none;
    color : gold;
    transition : all 0s ease-in;

    :hover {
        font-size : 1.3em; 
    }
`;

const SkillContainer = styled.div`
    display : flex;
    flex-direction : column;
`;

const SkillText = styled.div`
    margin-top : 30px; 
    font-size : 1.2em;
`;

const SkillList = styled.div`
    display : flex;
    flex-wrap : wrap;
`;

const SkillDomain = styled.div`
    
    margin : 2px;
    flex : 0 0 auto;
`;

const SkillDomainTitle = styled.p`
    color : gold;
    text-align : center;
`;

const Skill = styled.div`
    border : 2px solid gold;
    margin : 10px;
    padding : 6px;
    border-radius : 5px;
    text-align : center;
`;


const AboutMe = ({AboutMe,MountData}) => {
    const {Summary,Skills} = AboutMe;

    if(!MountData)
        return (<StyledContainer id="aboutMe"> </StyledContainer>)
   
    return(
        <StyledContainer id="aboutMe">
            <SectionTitle>1. About Me </SectionTitle>
            <SummaryContainer>
                <SummaryText>{Summary} <Link href="https://www.stevens.edu/" target="__blank"> Stevens Institue of Technology</Link></SummaryText>
                <Image src="./pic.jpg" alt="Image"></Image>
            </SummaryContainer>
            <SkillContainer>
                <SkillText>Some Technologies I have worked on : </SkillText>
                <SkillList>
                    {Skills && Object.keys(Skills).map((key,value) =>
                        <SkillDomain key={key}>
                            <SkillDomainTitle>{key}</SkillDomainTitle>
                            {Skills[key].map(
                                (skill) => <Skill key={skill}>{skill}</Skill>
                            )}
                        </SkillDomain>
                    )}
                </SkillList>
            </SkillContainer> 
        </StyledContainer>
    )
} 

export default AboutMe;