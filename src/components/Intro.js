import { React, useState, useEffect } from 'react'
import { Typography, styled, Grid } from "@mui/material";
import {
    StyledGenericRoot,
    StyledGenericContainer,
    StyledDivider,
} from "./Styles"
import headshot from "../static/photo_of_me_square.jpg"

const StyledIntroGrid = styled(Grid)(({ ismobile }) => ({
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: ismobile ? "3.5rem" : "0rem",
    display: "inline-flex",
}));

const StyledHeadshotImg = styled("img")(({ theme }) => ({
    width: "270px",
    textAlign: "center",
    borderRadius: "2rem",
    border: "0.5rem solid",
    borderColor: theme.palette.accent,
}));

const StyledIntroText = styled("div")(({ theme }) => ({
    display: "block",
    textAlign: "left",
    marginLeft: "10rem"
}));

const StyledIntroTitle = styled(Typography)(({ theme }) => ({
    fontWeight: "bold !important",
    color: theme.palette.text.title,
    fontSize: "clamp(34px, 4vw, 55px) !important",
}));

const StyledIntroSubTitle = styled(Typography)(({ theme }) => ({
    fontWeight: "bold !important",
    color: theme.palette.text.subtitle,
    fontSize: "clamp(34px, 4vw, 50px) !important",
}));

const StyledIntroPrefix = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.subtitle + " !important",
    fontSize: "clamp(20px, 2vw, 26px) !important",
}));

const StyledIntroSubText = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.tertiary + " !important",
    fontSize: "clamp(20px, 2vw, 20px) !important",
    paddingTop: "0.7rem"
}));

const Intro = () => {
    const [headshotImg, setHeadshotImg] = useState(headshot)

    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsloading(false);
    //     }, 2400);

    //     const loadImage = async () => {
    //         const img = new Image();
    //         img.src = headshot;
    //         await img.decode();
    //         setHeadshotImg(headshot);
    //     };
    //     loadImage();
    // }, []);

    return (
        <StyledGenericRoot>
            <StyledGenericContainer>
                <StyledIntroGrid>
                    <StyledHeadshotImg alt="" src={headshotImg} />
                    <StyledIntroText>
                        <StyledIntroPrefix>
                            Welcome! My name is
                        </StyledIntroPrefix>
                        <StyledIntroTitle>
                            David Del Grosso
                        </StyledIntroTitle>
                        <StyledIntroSubTitle>
                            Software Engineer
                        </StyledIntroSubTitle>
                        <StyledIntroSubText>
                            I'm a full-stack developer specializing in React and Django. I love building tools and applications that maximize efficiency and optimize the user experience.
                        </StyledIntroSubText>
                    </StyledIntroText>
                </StyledIntroGrid>
            </StyledGenericContainer>
        </StyledGenericRoot>
    )
}

export default Intro
