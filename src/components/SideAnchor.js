import React from 'react'
import { styled, useTheme } from "@mui/material"
import { emailSvgPath, githubSvgPath, linkedInSvgPath } from './SvgHelper';

const StyledAnchorLink = styled("a")(({ theme }) => ({
    "& svg": {
        width: "2.2rem",
        cursor: "pointer",
        transition: "transform 0.2s ease-in-out",
        transform: "none",
    },
    "&:hover": {
        "& svg": {
            fill: theme.palette.text.primary + " !important",
            transform: "scale(1.2)",
        },
    },
}));

const StyledLeftAnchor = styled("div")({
    width: "40px",
    position: "fixed",
    bottom: "40vh",
    left: "50px",
    right: "auto",
    Zndex: "10",
    animation: "fadeInLeft",
    animationDuration: "1s",
});

const SideAnchor = () => {
    const theme = useTheme();

    return (
        <>
            <StyledLeftAnchor>
                <StyledAnchorLink
                    href="https://www.linkedin.com/in/daviddelgrosso97/"
                    target="_blank"
                    aria-label="LinkedIn"
                >
                    <svg
                        fill={theme.palette.text.title}
                        width="44px"
                        height="44px"
                        viewBox="-5.5 0 32 32"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>LinkedIn</title>
                        <path d={linkedInSvgPath} />
                    </svg>
                </StyledAnchorLink>
                <StyledAnchorLink
                    href="https://github.com/david-delgrosso"
                    target="_blank"
                    aria-label="Github"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        width="44px"
                        height="44px"
                        fillRule="evenodd"
                        fill={theme.palette.text.title}
                    >
                        <title>Github</title>
                        <path fillRule="evenodd" d={githubSvgPath} />
                    </svg>
                </StyledAnchorLink>
                <StyledAnchorLink
                    href="mailto:daviddelgrosso97@gmail.com"
                    sx={{ transform: "scale(0.90)" }}
                >
                    <svg
                        fill={theme.palette.text.title}
                        height="44px"
                        width="44px"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 75.294 75.294"
                        xmlSpace="preserve"
                    >
                        <title>Email</title>
                        <g>
                            <path d={emailSvgPath} />
                        </g>
                    </svg>
                </StyledAnchorLink>
            </StyledLeftAnchor>
        </>
    );
};

export default SideAnchor
