import React from 'react'
import { Typography, styled } from "@mui/material";
import {
    StyledGenericRoot,
    StyledGenericContainer,
    StyledGenericTitle,
    StyledGenericSubText,
    StyledDivider
} from "./Styles"
import * as Scroll from "react-scroll";

const StyledSkillsGrid = styled("div")(() => ({
    display: "inline-flex",
    flexWrap: "wrap",
    marginTop: "3vh",
    justifyContent: "center"
}));

const StyledSkillsBox = styled("div")(({ theme }) => ({
    background: theme.palette.background.skills,
    marginInline: "0.5rem",
    marginTop: "1rem",
    borderRadius: "1rem",
    padding: "1rem",
    minWidth: "4rem",
    textAlign: "center",
}));

const StyledSkillsText = styled(Typography)(({ theme }) => ({
    fontSize: "1.5rem !important",
    color: theme.palette.text.skills,
    [theme.breakpoints.down("sm")]: {
        fontSize: "1.2rem !important",
    },
}));

const About = () => {
    const skillsArr = [
        "Python",
        "Django",
        "AWS",
        "Javascript",
        "React",
        "Material-UI",
        "HTML",
        "CSS",
        "PostgreSQL",
        "C/C++",
        "Matlab",
        "Mathematica",
        "VBA",
        "R"
    ]

    return (
        <Scroll.Element name="About">
            <StyledGenericRoot>
                <StyledGenericContainer>
                    <StyledGenericTitle>
                        ABOUT ME
                    </StyledGenericTitle>
                    <StyledDivider />
                    <StyledGenericSubText>
                        Welcome! My name is David and I recently completed a career transition into full-stack software engineering. After developing software solutions for space systems for about 4 years, I discovered that my heart was more invested in the coding than in the math and physics. Through online classes and personal projects, I spent about a year learning everything I could about software development. Below are several of the languages and technologies I've become proficient in over the course of my journey.
                    </StyledGenericSubText>
                    <StyledSkillsGrid>
                        {skillsArr.map((skill) => (
                            <StyledSkillsBox>
                                <StyledSkillsText>
                                    {skill}
                                </StyledSkillsText>
                            </StyledSkillsBox>
                        ))}
                    </StyledSkillsGrid>
                </StyledGenericContainer>
            </StyledGenericRoot>
        </Scroll.Element>
    )
}

export default About
