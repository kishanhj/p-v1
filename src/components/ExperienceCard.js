import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
    display : block;
    margin : 25px;
`;

const Title = styled.h3`
`;

const Timeline = styled.div`

`;

const Roles = styled.ul`
    display : flex;
    flex-direction : column;
`;

const Role = styled.li`
    margin : 2px;
    line-height : 1.5;
    font-size : 1.2em;
`;

const Company = styled.a`
    color : gold;
    text-decoration : none;
    margin-left : 10px;

    :hover {
        font-size : 1.5em;
    }
`;

const Position = styled.span`
    font-size : 1.4em;
`;

var count = 1;

const ExperienceCard = ({data}) => {

    return (
        <StyledContainer>
            <Title> <Position>{data.position} </Position> @ 
                <Company href={data.company_url} target="__blank">
                     {data.company}
                </Company>
            </Title>

            <Timeline>{data.start} - {data.end} </Timeline>
            <Roles>
                {data.roles.map((role) => <Role key={count++}> {role} </Role>)}
            </Roles>
        </StyledContainer>
    );
}

export default ExperienceCard;