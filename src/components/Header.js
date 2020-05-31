import React from "react";
import styled from "styled-components"
import media from "../data/media"

const StyledHeader = styled.header`
    display : flex;
    min-height : 80px;
    margin-left : 20px;
    margin-right : 20px;
    color : white;
`;

const Nav = styled.nav`
    display : flex;
    align-items : center;
    width : 100%;

    ${
        media.tablet `
            flex-direction : column;
        `
    }
`;

const Link = styled.a`
    text-decoration : none;
    padding : 1em;
    color : white;
    transition : color 0.5s ease-in;

    :visited {
        color : white;
    }

    :hover {
        color : gold;
    }

`;

const Image = styled.img`
    width : 50px;
    height : 60px;
    margin : 5px;
    flex : 0 0 60px;
    border-radius : 50px;
`;

const LinkContainer = styled.div`
    // border : 1px solid green;
    flex : 1 0 100px;
    
`;

const OL = styled.ol`
    display : flex;
    justify-content: flex-end;
`;

const ResumeButton = styled.a`
    border : 2px solid gold;
    border-radius : 5px;
    padding : 10px;
    color : gold;
    font-size : 15px;
    font-weight : 500;
    background-color : transparent;
    flex : 0 0 60px;
    margin : 20px;
    cursor : pointer;
    transition : scale 0s ease-in-out;
    text-decoration : none;

    :hover  {
        transform : scale(1.1)
    }
`;


const Header = (props) => {
    
    return (
        <StyledHeader>
                <Nav>
                    <Image src="./img.png" />

                    <LinkContainer>
                        <OL>
                            <Link href="#about"> <li>About</li> </Link>
                            <Link href="/"> <li>Experience</li> </Link>
                            <Link href="/"> <li>Projects</li> </Link>
                            <Link href="/"> <li>Contact</li> </Link>
                        </OL>
                    </LinkContainer>

                    <ResumeButton target='__blank' href="./Resume.pdf">Resume</ResumeButton>
                </Nav>
        </StyledHeader>
    );
}

export default Header;