import { React, useState } from "react";
import { Container, styled, useTheme, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import {
    StyledDivider,
    StyledGenericContainer,
    StyledGenericRoot,
    StyledGenericSubText,
    StyledGenericTitle,
} from "./Styles";
import Typography from "@mui/material/Typography";
import { useInView } from "react-intersection-observer";
import * as Scroll from "react-scroll";
import data from "../content/experience.json";
import Slider from "react-slick"
import { MdKeyboardDoubleArrowRight } from "react-icons/md"
import "animate.css";

//Component styles
const StyledCarouselContainer = styled(Container)(({ theme }) => ({
    marginTop: "3rem",
    alignItems: "center",
    width: "75% !important",
    boxSizing: "unset !important",
    maxWidth: "1000px !important",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
        marginBottom: "4rem",
        width: "80% !important",
    },
    [theme.breakpoints.down("xs")]: {
        marginBottom: "4rem",
        width: "90% !important",
    },
}));
const StyledCarouselCard = styled("div")(({ theme }) => ({
    borderRadius: "2rem !important",
    padding: "2rem 2rem",
    backgroundImage: `radial-gradient(ellipse at center, ${theme.palette.background.tertiary}10, ${theme.palette.background.tertiary}40)`,
    [theme.breakpoints.down("sm")]: {
        padding: "1.25rem 1.25rem",
    },
    maxWidth: "75%",
    border: `0.25rem solid ${theme.palette.accent}70`,
    height: "20rem"
}));
const StyledCarouselTitle = styled(Typography)(({ theme }) => ({
    fontSize: "clamp(28px, 4vw, 44px) !important",
    color: theme.palette.text.title,
}));
const StyledCarouselSubTitle = styled(Typography)(({ theme }) => ({
    fontSize: "clamp(18px, 2vw, 28px) !important",
    color: theme.palette.text.subtitle,
}));
const StyledCarouselSubText = styled(Typography)(({ theme }) => ({
    marginTop: "1rem !important",
    fontSize: "clamp(16px, 1.8vw, 24px) !important",
    color: theme.palette.text.primary,
    marginTop: "0"
}));

const customDotsClass = "custom-dots-class";

const Experience = () => {
    const theme = useTheme();

    const [experienceContainer, experienceContainerInView] = useInView({
        threshold: 0.4,
        triggerOnce: true,
    });
    const [s1, s1InView] = useInView({
        threshold: 0.8,
        triggerOnce: true,
    });

    const dotStyles = `
    .${customDotsClass} li button:before {
      font-size: 0.75rem;
      color: ${theme.palette.text.primary} !important;
      margin-top: 1rem;
      opacity: 0.4;
    }
    .${customDotsClass} li .slick-active button:focus:before  {
      opacity: 1 !important;
    }
    .${customDotsClass} li .slick-active button:before  {
      opacity: 1 !important;
    }
  `;

    const settings = {
        dots: true,
        autoplay: false,
        dotsClass: `slick-dots ${customDotsClass}`,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const descriptionList = (list) => {

    }

    return (
        <Scroll.Element name="Experience">
            <StyledGenericRoot ref={experienceContainer}>
                <StyledGenericContainer
                    sx={
                        experienceContainerInView
                            ? {
                                visibility: "visible",
                                animation: "fadeInUp",
                                animationDuration: "1s",
                            }
                            : { visibility: "hidden" }
                    }
                >
                    <StyledGenericTitle component="h1">
                        Experience
                        <StyledDivider />
                    </StyledGenericTitle>
                    <StyledGenericSubText component="h1">
                        After graduating from Virginia Tech in 2019, I worked as an Aerospace Engineer for 4 years before transitioning to software engineering.
                    </StyledGenericSubText>
                </StyledGenericContainer>

                <StyledCarouselContainer
                    ref={s1}
                    sx={
                        s1InView
                            ? {
                                visibility: "visible",
                                animation: "fadeInUp",
                                animationDuration: "1s",
                            }
                            : { visibility: "hidden" }
                    }
                >
                    <style>{dotStyles}</style>
                    <Slider {...settings}>
                        {data.map((item) => (
                            <StyledCarouselCard key={item.id}>
                                <StyledCarouselTitle>{item.company}</StyledCarouselTitle>
                                <StyledCarouselSubTitle>{item.jobTitle}</StyledCarouselSubTitle>
                                <StyledCarouselSubTitle sx={{ color: theme.palette.text.tertiary }}>{item.years}</StyledCarouselSubTitle>
                                <StyledCarouselSubText>
                                    <List sx={{ paddingTop: "0" }}>
                                        {item.description.map((text) => (
                                            <ListItem sx={{ padding: "0" }}>
                                                <ListItemIcon sx={{ minWidth: "0", paddingRight: "0.5rem", marginBottom: "auto", marginTop: "0.7%", color: theme.palette.text.primary }}>
                                                    <MdKeyboardDoubleArrowRight />
                                                </ListItemIcon>
                                                <ListItemText primary={text} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </StyledCarouselSubText>
                            </StyledCarouselCard>
                        ))}
                        <StyledCarouselCard key={data.length + 1}>
                            <StyledCarouselTitle>Education</StyledCarouselTitle>
                            <StyledCarouselSubTitle>Virginia Polytechnic Institute and State University</StyledCarouselSubTitle>
                            <StyledCarouselSubTitle sx={{ color: theme.palette.text.title }}>B.S. Aerospace Engineering</StyledCarouselSubTitle>
                            <StyledCarouselSubTitle sx={{ color: theme.palette.text.tertiary }}>2015 - 2019</StyledCarouselSubTitle>
                            <StyledCarouselSubTitle>Eastern University</StyledCarouselSubTitle>
                            <StyledCarouselSubTitle sx={{ color: theme.palette.text.title }}>M.S. Data Science</StyledCarouselSubTitle>
                            <StyledCarouselSubTitle sx={{ color: theme.palette.text.tertiary }}>2022 - 2023</StyledCarouselSubTitle>
                        </StyledCarouselCard>
                    </Slider>
                </StyledCarouselContainer>
            </StyledGenericRoot>
        </Scroll.Element>
    );
};

export default Experience;
